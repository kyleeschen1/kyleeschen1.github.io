
(ns ^:figwheel-hooks blog.render
  (:require
   [com.rpl.specter :as s]
   [goog.string :as gstring]))



;;################################################################
;; Symbols
;;################################################################


(defn sym
  [kw]
  (gstring/unescapeEntities (str "&" (name kw) ";")))

(defn row
  [& args]
  (into [:div.math.row] args))

(defn $

  ([style]
   {:style style})

  ([attrs style]
   (assoc attrs :style style)))

(declare render)

(defmulti -render :render-tag)

(defn add-jostle
  [el]
  (let [
        f (fn [el]
            [:div ($ {
                      :class ["jostle"]}
                          {:text-align "center"
                           :animation-delay (str (* 2 (rand)) "s")}) el])]

    [f el]))

(defmethod -render :default
  [{:keys [text]}]
  (add-jostle [:div.math text]))

(defmethod -render :equation
  [{:keys [text nodes]}]

  (into

   [:div.math.row.spaced]

   (for [n nodes]
     ^{:key n} [render n])))

(defmethod -render :bracket
  [{:keys [text nodes]}]

  (let [border "0.1em solid black"
        h "100%"
        w "0.1em"
        start (add-jostle

               [:div {:style {:border-left border
                              :border-top border
                              :border-bottom border
                              :width w
                              :height h}}])

        end (add-jostle
             [:div {:style {:border-right border
                            :border-top border
                            :border-bottom border
                            :height h
                            :width w}}])

        container [:div.math
                   ($ {:justify-items "even-spacing"
                       :display "inline-flex"})
                   start]

        innards (for [n nodes]
                  ^{:key n} [render n])]

    (conj (into container innards) end)))



(defmethod -render :matrix
  
  [{:keys [dims nodes]}]

  (fn [{:keys [dims nodes t?]}]

    (let [[rows cols] dims]

      (into
       [:div ($ {:display "inline-grid"
                 :grid-template-columns  (apply str (repeat cols "auto "))
                 :grid-template-rows (apply str (repeat rows "auto ")) 
                 :grid-column-gap "0.25em"
                 :grid-row-gap "0.25em"
                 :justify-items "center"
                 :align-items "center"

                 })]

       (for [r (range 1 (inc rows))]
         
         (for [c (range 1 (inc cols))]

           ^{:key [t? r c]}    [:div 

                                
                                

                                ($ {:margin "0.25em 0.25em 0.255em 0.25em"
                                    :grid-column-start c
                                    :grid-column-end c
                                    :grid-row-end r
                                    :grid-row-start r
                                    
                                    :transition  "2000ms"})

                                (if t?
                                  [render (get-in nodes [c r])]
                                  [render (get-in nodes [r c])])]))))))



(defmethod -render :fraction
  [{:keys [num den]}]

  (into
   
   [:div {:style {:display "inline-flex"
                  :flex-direction "column"
                  :justify-content "center"
                  :align-items "center"
                  :text-align "center"
                  }}

    [:div {:style {:font-size "0.75em"
                   :padding "0em 1em 0em"
                   :border-bottom "1px solid black"} }
     [render num]]
  
    [:div {:style {:font-size "0.75em" :padding "0em 1em 0em"} } [render den]]]))

(defmethod -render :derivative
  [{:keys [num den partial?]}]

  (let [d (if partial?
            (sym :part)
            "d")]

    (into
     
     [:div {:style {:display "inline-flex"
                    :flex-direction "column"
                    :justify-content "center"
                    :align-items "center"
                   ;; :text-align "center"
                    }}

      [:div {:style {:font-size "0.75em"
                   ;;  :padding "0em 1em 0em"
                     :display "flex"
                     :flex-direction "row"
                     :border-bottom "1px solid black"} }
       (add-jostle d)
       [render num]]
   
      [:div {:style {:font-size "0.75em"
                     :padding "0em 1em 0em"
                     :display "flex"
                     :flex-direction "row"
                     :justify-content "center"
                     :align-item "center"
                     :text-align "center"} }
       (add-jostle d)
       [render den]]])))




(defmethod -render :sym
  [{:keys [key]}]
  (println key)
  [:div.math (add-jostle (sym key))])

(defmethod -render :log
  
  [{:keys [arg]}]
  
  [row (add-jostle "log")

   (add-jostle [:div.math.opening  "("])
   [:div ($ {:font-size "0.75em"}) [render arg]]
   (add-jostle [:div.math.closing  ")"])])



(defmethod -render :integral
  
  [{:keys [body delta]}]
  
  [:div.math.row.spaced
   
   (add-jostle [:div ($ {:font-size "2em"}) (sym :int)])
    [render body]
   [row "d" [render delta]]])


(defn render-exp
  [node* exp]
  
  [row node*
   [:div ($ {:font-size "0.75em"
             :transform "translateY(-1.25em)"})
    [render exp]]])


(defn render-coef
  [node* coef]
  [:div ($ {:display "flex"
            :flex-direction "row"})
   [render coef] node*])

(defn render
  [{:keys [exp coef] :as node}
   ]
  (let [node* (-render node)
        node* (if coef
                (render-coef node* coef)
                node*)]
    (if exp
      (render-exp node* exp)
      node*)))


(defmulti parse
  (fn [tag params]
    tag))

(defmethod parse :default
  [_ {:keys [id form]}]
  {:tag :default
   :form form})

(defmethod parse :matrix
  [_ {:keys [rows brackets id]}]
  {:tag :matrix
   :rows rows
   :id id})


(defn math-display
  
  []
  
  
  [:div.math ($ {:font-size "18px"
                 :margin-bottom "2em"})

   [:div
    
    (render {:render-tag :bracket

             :nodes [{:render-tag :integral
                      :delta {:render-tag :oop
                              :text "x"}
                      :body
                      {:render-tag :equation
                       :nodes

                       [{:render-tag :sym
                         :key :pi}
                        
                        {:render-tag :op
                         :text '+}

                        {:render-tag :bracket
                         :nodes [{:render-tag :matrix
                                  :dims [2 2]
                                
                                  :nodes {1 {1 
                                              {:render-tag :derivative
                                              :partial? true
                                              :num {:render-tag :default
                                                    :text 'y}
                                              :den

                                              {:render-tag :default                                                 :text 'w}}
                                             2 {:render-tag :op
                                                :text 3}}
                                          2 {1 {:render-tag :op
                                                :text 0}
                                             2 
                                             {:render-tag :derivative
                                              :partial? true
                                              :num {:render-tag :default
                                                    :text 'y}
                                              :den

                                              {:render-tag :default                                                 :text 'x}}}}

                                  }]}

                        {:render-tag :op
                         :text '+}
                        
                        {:render-tag :log
                         :arg
                         {:render-tag :equation

                          :nodes [{:render-tag :sym
                                   :coef {:render-tag :default
                                          :text 3
                                          }
                                   :key :lambda
                                   :exp {:render-tag :fraction
                                         :num {:text 14}
                                         :den {:text 15}}}

                                  {:render-tag :op
                                   :text '+}
                                  
                                  {:render-tag :fraction
                                   :num {:render-tag :sym
                                         :key :pi
                                         :coef
                                         {:render-tag :default
                                          :text 10}}
                                   :den {:render-tag :default
                                         :text "2"}}

                                  {:render-tag :op
                                   :text '+}

                                  {:render-tag :derivative
                                   :partial? true
                                   :num {:render-tag :default
                                         :text 'y}
                                   :den

                                   {:render-tag :default
                                    :text 'x}}]}}]}}]})]])
