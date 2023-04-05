
(ns ^:figwheel-hooks blog.demo
  
  (:require

   [blog.traverse :as t]
   [blog.events :refer [event]]
   [blog.scrolling :refer [set-scroll-trigger
                           rm-scroll-trigger]]

   [blog.parser :refer [parser]]
   
   [blog.utils :refer [render-page <sub >evt $]]
   [blog.render :refer [math-display render]]

   [clojure.zip :as z]

   [com.rpl.specter :as s]
   
   [re-frame.core :as rf]
   [reagent.core :as reagent :refer [atom]]
   [goog.string :as gstring]
   [reagent.dom :as rdom]))




;;#########################################################################################
;; Dom Traversals
;;#########################################################################################


(defn dom-branch?
  [node]
  (:nodes node))

(defn dom-children
  [node]
  (:nodes node))

(defn dom-make-node
  [node children]
  (assoc node :nodes children))


(s/defnav DOM-CHILDREN
  []
  (select* [this structure next-fn]
           (next-fn (:nodes structure)))
  (transform* [this structure next-fn]
              (update structure :nodes next-fn)))


(defn t
  []
  (t/traverse  
     
   {:node {:tag :p
           :nodes [{:tag :div
                    :text "yams"}
                   
                   {:tag :text
                    :text "butter"}
                   
                   "Hiccup"
                   
                   {:tag :div
                    :nodes ["Eggs"
                            "Bacon"]}
                   
                   "Beer Can"
                   "Bacon"]}
    :next-id 0
    :ns :text-col
    :parent-id :text-col
    :path [:text-col]
    :acc []}
   

            :nodes
            :nodes
            (fn [node c] (assoc node :nodes c)) 
     
            [(fn string->map [{:keys [node]}]
               (when (string? node)
                 {:node {:tag :text
                         :text node}}))

             (fn add-ns [{:keys [node ns]}]
               {:node (assoc node :ns ns)})

             [(fn log-prev-id [{:keys [current-id]}]
                {:prev-id current-id})

              (fn gen-current-id [{:keys [next-id]}]
                {:current-id next-id})

              (fn gen-next-id [{:keys [next-id]}]
                {:next-id (inc next-id)})
              
              (fn add-ids-to-node
                [{:keys [current-id prev-id next-id node parent-id]}]
                {:node (assoc node
                              :id current-id
                              :prev prev-id
                              :parent-id parent-id
                              :next-id next-id)})

              (fn update-parent-id [{:keys [node]}]
                (when (:nodes node)
                  {:parent-id (:id node)}))]

             (fn init-class [{:keys [node]}]
               (when-not (:class node)
                 {:node (assoc node :class #{})}))

             (fn init-styles [{:keys [node]}]
               (when-not (:style node)
                 {:node (assoc node :style {})}))]

            [(fn gather [{:keys [node acc]}]
               {:acc (conj acc {(:id node) node})})

             #_(fn replace-node-w-id [{:keys [node]}]
               {:node (:id node)})
             
             (fn restore-parent-id [{:keys [node]}]
               (when (:nodes node)
                 {:parent-id (:parent-id node)}))]))


;;#########################################################################################
;; Functions to Write
;;#########################################################################################


(defn add-class
  []
  )

(defn remove-class
  []
  )

(defn data->attrs
  [data]
  )


(defmulti format-by-ctx
  (comp :ctx :node))

(defmethod format-by-ctx :default
  [_])

(defmethod format-by-ctx :clj
  [_])

(defmethod format-by-ctx :haskell
  [_])

;;#########################################################################################
;; Events
;;#########################################################################################

(defmethod event :change-class
  []
  )



;;#########################################################################################
;; Dom Traversals
;;#########################################################################################



(def walk
  (s/recursive-path [f] p
                    (if (s/pred dom-branch?)
                      [(s/stay-then-continue DOM-CHILDREN s/ALL p) (s/view f)]
                      s/STAY)))





(defn preprocess-dom-data
  [data]
  (let [event (fn [dir] [:est-focus dir data])
        data (assoc data :event event)
        ns (get data :ns)

        split? (= :split (:tag data))
       
        
        data (s/transform [DOM-CHILDREN s/ALL]
                          
                          (fn [node]

                            (let [node
                                  
                                  (if (string? node)
                                    
                                    {:tag :text
                                     :id (gensym "node-")
                                     :text node}
                                    
                                    (if (:id node)
                                      node
                                      (assoc node :id (gensym))))]
                              (assoc node :ns ns
                                     :split? split?)))
                          data)]
    data))



(defmulti -render :tag)
 



(defn data->id
  [data]
  (:id data))

(defn register-parent-id
  
  [{:keys [ns id]}]
  
  (rf/reg-sub
   
   id
   :<- [ns]

   (fn [data [_ node-id]]
     (get-in data [id node-id]))))

(declare render**)

(defn tempo
  []

  (rf/reg-sub

   :text-col-check

   :<- [:dom]
   
   (fn [dom _]
     (get dom :text-col)))

  (rf/reg-sub

   :text-col

   :<- [:text-col-check]
   
   (fn [dom [_ {:keys [id]}]]
     
     (get dom id))))

(tempo)

(rf/reg-event-db
 
 :appendo
 
 (fn [db [_ path nodes]]


   
   (s/transform [:dom path]
                (fn [node]
                  (apply merge node nodes))
                db)))








(rf/reg-sub

 :dom

 (fn [db _]

   (get db :dom)))



(defn render-tree
  [nodes]
  

  (let [tree (s/transform (walk identity) preprocess-dom-data nodes)
        nodes (s/select [(walk identity)
                         (s/view (fn [node]
                                   {(:id node) node}))]
                        tree)]

 
    (>evt [:appendo (:ns tree) nodes])
    
    [render** tree]))

(defn render-tree*
  [nodes]
  

  (let [{:keys [acc node]} (t)]

 
    (>evt [:appendo :text-col acc])
    
    [render** node]))


(defn process-dom-data
  [ast]
  (let [ast*
        (->> ast
             (s/transform [(s/collect-one :id) :attrs :id]
                          (fn [id ast]
                            
                            
                            ;;(println ast)
                            id)
                          )
             )

        ast* (if (:text ast)
               (s/transform [:attrs :class]
                            (fn [cls]
                              (if cls
                                (conj cls "text")
                                #{"text"})) ast*)
               ast*)]
    ast*))





(defn add-event
  [data]
  (when-not (= :split-text (:tag data))
    
    (try
      (if-let [event (:event data)]
        
        (set-scroll-trigger (str (data->id data))
                            (fn [dir]

                              (if (= "down")
                                (>evt [:run :change-focus {:data data}])
                                (>evt [:undo])
                                
                                #_(>evt [:est-focus dir data]))))
        (println ""))
      (catch js/Error. e
        (println e)
        (println (data->id data))))))


(defn render**
  
  [data]

  (fn [data]
    
    (reagent/create-class

     {:component-did-mount
      (fn [this that]
        (when (:text data) #_(:highlight? data)
          (add-event data)))

      :component-will-unmount
      (fn [_]
        (rm-scroll-trigger (:id data)))

      :reagent-render
      (fn [data]
        (when-let [data* (<sub [(:ns data) data])]
          (-render (process-dom-data data*))))})))

(defn add-dom-children
  [el ls]
  (into el
        (for [l ls]
          ^{:key (:id l)} [render** l])))

(defmethod -render nil
  [_]
  nil)

(defmethod -render :default
  
  [{:keys [tag attrs nodes text]}]
  
  (let [el [tag attrs text]]
    (if nodes
      (add-dom-children el nodes)
      el)))

(defmethod -render :text
  [{:keys [tag split? attrs text]}]
  [:span attrs text])

(defmethod -render :text-proxy
  [{:keys [attrs text]}]
  [:div attrs])

(defmethod -render :split
  [{:keys [tag attrs nodes] :as data}]

  (let [n (count nodes)
        h (/ 100 n)

        
        triggers (into [:div ($ {:position "relative"
                                 :display "flex"
                                 :flex-direction "column"})]
                       
                       (map (fn [{:keys [id event ns]} i]
                              
                              (let [id* (str "trigger-" id)
                                    node {:tag :text-proxy
                                          :proxy-id id
                                          :ns ns
                                          :id id*
                                          :event event
                                        
                                          :class #{}}
                                    
                                    attrs {:id id*
                                           :style {:top (str (* i h) "%")
                                                   :height (str h "%")
                                                 
                                                   :position "absolute"}}

                                    f (fn [node]
                                        (reagent/create-class
                                         {:component-did-mount
                                          (fn [_]
                                            (add-event node))
                                          :component-will-unmount
                                          (fn [_]

                                            (rm-scroll-trigger id*))

                                          :reagent-render
                                          (fn [_]
                                            [:div attrs])}))]
                                
                                ^{:key id*} [f node]))
                            
                            (conj (vec nodes)
                                  {:id (str "conclude-" (:id attrs))
                                   :ns (:ns data)}) (range)))

        
        
        nodes (s/setval [s/ALL :tag] :split-text nodes)]

    (conj
     [:div (s/transform [:style] (fn [style]
                                   (merge {:display "flex"
                                           :flex-direction "row"})) attrs)
      triggers]

     (add-dom-children [:div ($ {:display "inline"
                              })] nodes)) ))




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

(defn gen-random-delay
  []
  (str (* 2 (js/Math.random)) "s"))

(defn wrap-in-drift-divs
  [div]
  [:div.drift-y ($ {:position "relative"
                    :transform-style "preserve-3d"
                    :animation-delay (gen-random-delay)})
   
   [:div.drift-x ($ {:position "relative"
                     :transform-style "preserve-3d"
                     :animation-delay (gen-random-delay)})
    div]])

(defn coords->trsl
  
  [{tx :tx  ty :ty tz :tz}]
  
  (let [tx (* 0.66 tx)
        ty (* 2 ty)]
    
    (str "translate3d(" tx "em, " ty  "em, " (or  tz 0) "em)")))


;;################################################################
;; Render Multimethod
;;################################################################


(defmethod -render :root
  
  [{:keys [nodes]}]
  
  (into [:div]

        (for [n nodes]
          ^{:key (:id n)} [render n])))

(defmethod -render :delimiter
  [ast]
  (-render (assoc ast :tag :token)))


(defmethod -render :token  
  [{:keys [text] :as ast}]

  (wrap-in-drift-divs
   
   [:div ($ {:position "absolute"
             :transform (coords->trsl ast)})
    
    (render-string text)]))


(defmethod -render :branch
  [{:keys [nodes] :as ast}]

  
  (into [:div ($ {:class "preserve"}
                 {:position "relative"
                  :transform (coords->trsl ast)})]
        
        (for [n nodes]
          ^{:key (:id n)} [render** n])))

(defmethod -render :expression
  [{:keys [nodes]}]
  (add-dom-children
   [:div ($ {:display "flex"
             :flex-direction "row"
             :gap "1em"})]
   nodes))

(defmethod -render :math/function
  [{:keys [nodes]}]
  (add-dom-children
   [:div ($ {:display "flex"
             :flex-direction "row"
             :gap "1em"})]
   nodes))


;;################################################################
;; Scrolling
;;################################################################


(def gibberish
  (take 30 (repeat " blah ")))


(def inline-triggers

  {:tag :split
   :attrs {:id "pen"},
   :nodes [{:tag :text,
            :text "This is a demo of an approach to tutorials which allows writers to stress salience. "}
           "As readers scroll, they trigger animations on the right side of the screen. "
           "This makes it easy for writers to point - in short, to convey ostensive definitions. "
           "This is a fourth sentence."]})

(def essay-text
  {:tag :div
   :ns :text-col
   :attrs {:style {:padding-top "70%"
                   :min-height "150em"
                   }
           :class #{"text-col"}}


   :id "wrapper"
   :nodes [{:tag :h2
            :text "Demo"}

           
           
           inline-triggers

           {:tag :ol
            :nodes [{:tag :li
                     :text "Here's some wasted space!"
                     :highlight? true }
                    {:tag :li
                     :text"And here is more still!"
                     :highlight? true}]}
           
           {:tag :p
            :highlight? true
            :text "To the right one sees a meaningless array of symbols drifting like pollen in bile. In an effort to appear profound, I have made myself look all the more mathematically illiterate."}

           {:tag :p
            :highlight? true
            :text "What is this a demo of? In a word, incompetence. Now, for some enumerated gibberish:"}

           {:tag :ol
            :nodes 
            (for [i (range 20)]

              (let [i (inc i)
                    id (str "par-" i)
                    text (apply str  gibberish)]

                {:tag :li
                 :id id
                 :text text
                 :highlight? true
                 }

                ))}]})

(defn render-essay-text
  [_]
  #_[:iframe {:src "https://www.youtube.com/watch?v=OOG65rSM5fA"
            :height "500px"
            :width "500px"}]
  [:div.text-col [render-tree essay-text]])
