
(ns ^:figwheel-hooks blog.render
  (:require
   [blog.utils :refer [$]]
   [com.rpl.specter :as s]
   [reagent.core :as reagent :refer [atom]]
   [goog.string :as gstring]))



;;################################################################
;; Rendering
;;################################################################

(defn sym
  [kw]
  (gstring/unescapeEntities (str "&" (name kw) ";")))

(defn render-string
  [s]
  (case s
    "\\" "\\"
    "->" (sym :rarr)
    "<-" (sym :larr)
    ">>" (sym :Gt)
    "<<" (sym :Lt)
    "+" (sym :plus)
    "," " ,"
    s))

(defn wrap-in-drift-divs
  [div]

   
  [:div.drift-y ($ {:position "relative"
                    :transform-style "preserve-3d"
                    :animation-delay (str (* 2 (js/Math.random)) "s")})
   
   [:div.drift-x ($ {:position "relative"
                     :transform-style "preserve-3d"
                     :animation-delay (str (* 2 (js/Math.random)) "s")})
    div]])

(defn coords->trsl
  
  [{tx :tx  ty :ty tz :tz}]
  
  (let [tx (* 0.66 tx)
        ty (* 2 ty)]
    
    (str "translate3d(" tx "em, " ty  "em, " (or  tz 0) "em)")))


;;################################################################
;; Render Multimethod
;;################################################################

(defmulti render :tag)

(defmethod render :default
  [{:keys [text]}]
  (wrap-in-drift-divs
   [:div text]))

(defmethod render :root
  [{:keys [nodes]}]
  (into [:div]

        (for [n nodes]
          ^{:key (:id n)} [render n])))

(defmethod render :delimiter
  [ast]
  (render (assoc ast :tag :token)))


(defmethod render :token  
  [{:keys [text] :as ast}]

  (wrap-in-drift-divs
   
   [:div ($ {:position "absolute"
             :transform (coords->trsl ast)})
    
    (render-string text)]))


(defmethod render :branch
  [{:keys [nodes] :as ast}]

  
  (into [:div ($ {:class "preserve"}
                 {:position "relative"
                  :transform (coords->trsl ast)})]
        
        (for [n nodes]
          ^{:key (:id n)} [render n])))





(defn row
  [& args]
  (into [:div.math.row ($ {:transform-style "preserve-3d"})] args))

(declare render-exp render-coef)

(defn render*
  [{:keys [exp coef] :as node}
   ]
  (let [node* (render node)
        node* (if coef
                (render-coef node* coef)
                node*)]
    (if exp
      (render-exp node* exp)
      node*)))

(defn render-exp
  [node* exp]
  
  [row node*
   [:div ($ {:font-size "0.75em"
             :transform "translateY(-1.25em)"})
    [render* exp]]])


(defn render-coef
  [node* coef]
  [:div ($ {:display "flex"
            :flex-direction "row"})
   [render* coef] node*])


(defmethod render :equation
  [{:keys [text nodes]}]

  (into

   [:div.math.row.spaced]

   (for [n nodes]
     ^{:key n} [render* n])))

(defmethod render :bracket
  
  [{:keys [text nodes]}]

  (let [border "0.1em solid white"
        h "100%"
        w "0.1em"
        start #_(add-jostle)

        
        [:div.drift-x
         [:div.drift-y
          {:style {:border-left border
                   :border-top border
                   :border-bottom border
                   
                   ;;  :position "relative"
                   :text-align "center"
                   :width w
                   :height h}}]]

        end [:div.drift-x
             [:div {:style {:border-right border
                            :border-top border
                            :border-bottom border
                            ;; :position "relative"
                            :height h
                            :width w}}]]

        container [:div.math
                   ($ {:justify-items "even-spacing"
                       :display "inline-flex"
                       :position "relative"})
                   start]

        innards (for [n nodes]
                  ^{:key n} [render* n])]

    (conj (into container innards) end)))



(defmethod render :matrix
  
  [{:keys [dims nodes]}]

  (fn [{:keys [dims nodes t?]}]

    (let [[rows cols] dims]

      (into
       [:div.matrix]

       (for [r (range 1 (inc rows))]
         
         (for [c (range 1 (inc cols))]

           ^{:key [r c]}    [:div
                              
                                ($ {:margin "0.25em 0.25em 0.25em 0.25em"
                                    :grid-column-start c
                                    :grid-column-end c
                                    :grid-row-end r
                                    :grid-row-start r})

                                (if t?
                                  [render* (get-in nodes [c r])]
                                  [render* (get-in nodes [r c])])]))))))




(defmethod render :fraction
  [{:keys [num den]}]

  [:div.fraction
 

   [:div.fraction-component.numerator
    [render* num]]

   #_[:div.fraction-line]
   
   [:div.fraction-component
    
    [render* den]]])

(defmethod render :differential
  
  [{:keys [delta element]}]
  
  [row (wrap-in-drift-divs delta)
   
   [render* element]])

(defmethod render :derivative
  [{:keys [num den partial?]}]

  (let [d (if partial?
            (sym :part)
            "d")]

    (render {:tag :fraction
             
             :num {:tag :differential
                   :delta d
                   :element num}
             
             :den {:tag :differential
                   :delta d
                   :element num}})))




(defmethod render :sym
  [{:keys [key]}]
  (wrap-in-drift-divs [:div (sym key)]))

(defmethod render :log
  
  [{:keys [arg]}]
  
  [row (wrap-in-drift-divs [:div "log"])

   (wrap-in-drift-divs [:div.math.opening  "("])
   
   [:div ($ {:font-size "0.75em"}) [render* arg]]
   
   (wrap-in-drift-divs [:div.math.closing  ")"])])



(defmethod render :integral
  
  [{:keys [body delta]}]
  
  [:div.math.row.spaced ($ {:transform-style "preserve-3d"
                            :position "relative"})
   
   [wrap-in-drift-divs [:div ($ {:font-size "2em"}) (sym :int)]]
   
   [render* body]
   
   [row [wrap-in-drift-divs
         [:div.preserve
          [:div ($ {:transform "translate3d(0em, 0em, 10em)"
                    :position "absolute"
                    }) "d"]
          [:div ($ {:opacity "0%"}) "d"]]]
    [render* delta]]])



(defn math-display
  
  []
  
  
  [:div.math ($ {:font-size "18px"
                 :margin-bottom "2em"})

   (render {:tag :bracket

            :nodes [{:tag :integral
                     :delta {:tag :op
                             :text "x"}
                     :body
                     {:tag :equation
                      :nodes

                      [{:tag :sym
                        :key :pi}
                       
                       {:tag :op
                        :text '+}

                       {:tag :bracket
                        :nodes [{:tag :matrix
                                 :dims [2 2]
                                 
                                 :nodes {1 {1 
                                            {:tag :derivative
                                             :partial? true
                                             :num {:tag :default
                                                   :text 'y}
                                             :den {:tag :default
                                                   :text 'w}}
                                            2 {:tag :op
                                               :text 3}}
                                         2 {1 {:tag :op
                                               :text 0}
                                            2 
                                            {:tag :derivative
                                             :partial? true
                                             :num {:tag :default
                                                   :text 'y}
                                             :den

                                             {:tag :default
                                              :text 'x}}}} }]}

                       {:tag :op
                        :text '+}
                       
                       {:tag :log
                        :arg
                        {:tag :equation

                         :nodes [{:tag :sym
                                  :coef {:tag :number
                                         :text 3
                                         }
                                  :key :lambda
                                  :exp {:tag :fraction
                                        :num {:text 14}
                                        :den {:text 15}}}

                                 {:tag :op
                                  :text '+}
                                 
                                 {:tag :fraction
                                  :num {:tag :sym
                                        :key :pi
                                        :coef
                                        {:tag :default
                                         :text 10}}
                                  :den {:tag :default
                                        :text "2"}}

                                 {:tag :op
                                  :text '+}

                                 {:tag :derivative
                                  :partial? true
                                  :num {:tag :default
                                        :text 'y}
                                  :den

                                  {:tag :default
                                   :text 'x}}]}}]}}]})])

