(ns ^:figwheel-hooks blog.core
  (:require

   [blog.main-page :as mp]
   [blog.parser :refer [parser]]
   [blog.events :refer [event]]

   [blog.render :refer [render math-display]]
 
   [blog.dom :as dom]
   [blog.traversals :as t :refer [traverse]]
   [blog.zipper :as zp]
   [blog.utils :refer [render-page <sub >evt $]]
   
   [cljs.repl :refer [source]]
   [cljs.pprint :refer [pprint]]

   [cljs.core.async :as a]
   [clojure.zip :as z]

   [com.rpl.specter :as s]

   [re-frame.core :as rf]

   [instaparse.core :as insta]

   [edamame.core :refer [parse-string]]

   [cljsjs/d3]
   [com.rpl.specter.zipper :as SZ]
   [clojure.zip :as zip]
   [goog.dom :as gdom]
   [goog.string :as gstring]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom])
  
  (:require-macros
   [com.rpl.specter :refer [defcollector
                            defdynamicnav
                            declarepath
                            providepath]]))

;;################################################################
;; Indexing
;;################################################################

(comment

  ** Id
  Here we want to give each node
  - id
  - parent-id
  - child-ids
  - right-id
  - left-id

  ** Render adding in data
  - data and type becomes classes
  - tag special forms

  ** Collect
  - Classes
  - Data)



(s/defrichnav
  
  thread-ctx
  
  [path]
  
  (select* [this vals structure next-fn]

           ;; This is a standard select because without a transformation,
           ;; there is no state to thread.
           
           (next-fn vals structure))
  
  (transform* [this vals structure next-fn]

              (let [state* (atom {})

                    loop-over-nodes (fn [nodes]
                                      
                                      (loop [[n & ns :as nodes*] nodes
                                             state (dissoc structure :node)
                                             acc []]

                                        (if-not (seq nodes*)

                                          (do (reset! state* state) acc)

                                          (let [n* (next-fn [state] n)]
                                            
                                            (recur ns
                                                   (merge state (dissoc n* :node))                            
                                                   (conj acc (:node n*)))))))
                    
                    node (s/transform [:node (s/subselect path)]
                                      loop-over-nodes
                                      structure)]

                (merge node @state*))))



(def walk-parse-tree
  (s/recursive-path [] p
                    (s/if-path (s/pred :nodes)

                     
                     [(s/stay-then-continue :nodes s/ALL p)]

                     s/STAY)))

(defn branch?
  [tree]
  (:nodes tree))

(defn children
  [tree]
  (:nodes tree))

(defn index
  
  [{:keys [node idx]}]
  
  {:node (assoc node :idx idx)
   :idx (inc idx)})







(defn compose
  [& fs]
  (let [f (reduce (fn [f2 f1]
                (fn [input]
                  (let [result* (merge input (f1 input))]
                    (f2 result*))))
              identity
              (reverse fs))]
    (fn [ctx node]
      (f (assoc ctx :node node)))))

(declare dom-data)

(defn postprocess
  
  [tree]
  
  (let [{node :node dom :dom-data}
        
        (s/transform (thread-ctx walk-parse-tree)
                     
                     (compose ;;index
                      
                     ;; collect-dom-data
                      )

                     {:node tree
                      :dom-data {}
                      :idx 0})]

    dom
  
    #_(swap! dom-data merge dom)
    #_(s/transform [s/ATOM :root s/ATOM :child-ids] (fn [ids] (conj ids (:id node))) dom-data)))


;;################################################################
;; Event Multimethod
;;################################################################



(defmethod event :parse
  [{:keys [dom string]}]
  (let [p (parser string)]
    (update-in dom [:root :nodes] conj p)))


(defn rm-class
  
  [ns id cls-name dom]
  
  (s/transform [ns id :attrs :class]
               
               (fn [cls]     
                 (disj (set cls) cls-name))
               
               dom))


(defn add-class
  
  [ns id cls-name dom]
  
  (s/transform [ns id :attrs :class]
               
               (fn [cls]
                 (if cls
                   #{cls-name}
                   (conj cls cls-name)))
               
               dom))

(defmethod event :change-focus
  [{:keys [dom data]}]

  (if (#{:ol :div} (:tag data))

       dom

       
       (let [cls-name "focused"
            id (if (= :text-proxy (:tag data))
                                 (:proxy-id data)
                                 (:id data))
             
             ns (:ns data)
             

             ;; Remove Class
             dom (if-let [id (s/select-one [:classes cls-name] dom)]
                  (rm-class ns id cls-name dom)
                  dom)


             ;; Add Class
             dom (add-class ns id cls-name dom)

            ;; Set class assignment
            dom  (s/setval [:classes cls-name] id dom)]
         
         dom)))

;;################################################################
;; Event Handling
;;################################################################

(def init-dom
  {:dom {:root {:tag :root :nodes []}
         :classes {}
         :paths {}}})

(defn get-next-dom-state
  
  [op dom params]

  (if (= :clear-root op)

    (:dom init-dom)
    
    (if-let [next (:next dom)]
      
      next
      
      (let [params (merge {:op op 
                           :dom dom} 
                          params)
            dom* (event params)]
        
        (assoc dom* :prev dom)))))

(rf/reg-fx
  
  :block
  
  (fn [_]
    ))

(rf/reg-event-fx
  
  :run
  
  (fn [{:keys [db]} [_ op params]]
    
    
    (let [dom* (get-next-dom-state op (:dom db) params)]
      
      {:db (assoc db :dom dom*)
       :block nil})))

(rf/reg-event-fx
  
  :undo
  
  (fn [{:keys [db]} [_ op params]]
    
    (let [dom (:dom db)
          dom* (if-let [prev (:prev dom)]
                 (assoc prev :next dom)
                 dom)]
      
      {:db (assoc db :dom dom*)
       :block nil})))

(rf/reg-sub

 :root

 (fn [db [_ id]]
   (get-in db [:dom id])))

(defn render-root
  []
  (render (<sub [:root :root])))




;;################################################################
;; Textbox
;;################################################################



(def string
"
(defn factorial
  [n & xs]
  (if (zero? n)
    1
    (* n (tag :a (factorial (dec n))))))


(defn filter
  ([pred]
    (fn [rf]
      (fn
        (tag :fn-body 
          ([] (rf)))
        ([result] (rf result))
        ([result input]
           (if (pred input)
             (rf result input)
             result))))))

")

(defn textbox
  []
  (let [contents (atom string)]
    (fn []
      [:div
       [:textarea {:on-change #(reset! contents (-> % .-target .-value))
                   :value @contents}]
       [:button {:on-click #(>evt [:run :parse {:string string}])}
        "Parse Text"]])))


;;################################################################
;; Control Panel
;;################################################################

(def temp-defaults
  {:rotX 0,
   :trsY -32,
   :origin-x 0,
   :origin-y 0,
   :rotZ 0, 
   :trsX 50, 
   :angle 0, 
   :perspective 1000, 
   :trsZ -48, 
   :rotY 1})

(defonce temp
  (atom temp-defaults))

(defn gen-slider

  [label kw [min max]]

  (let [center (js/Math.round (/ 2 (- max min)) 0)]

    (fn [label kw [min max]]

      [:div#slider ($ {:display "flex"
                       :flex-direction "row"
                       :self-align "center"
                       :gap "0.75em"})

       [:input {:type :range
                :min min
                :max max
                :value (kw @temp)
                
                :on-change #(swap! temp assoc kw (-> % .-target .-value js/parseInt))}]

       [:button {:on-click #(swap! temp assoc kw center)} "Center"]
       
       [:strong label] (str  "at "(kw @temp))])))

(defn control-panel
  []
  (fn []
    [:div ($ {:font-size "0.5em"
              :border "1px solid black"
              :padding-left "1em"
              :padding-bottom "1em"
              :width "fit-content"})
     
     [:h1 "Control Panel"]

     [:h2 "Angle"]
     [gen-slider "Angle" :angle [-360 360]]
     
     [:h2 "Translate"]
     [gen-slider "X" :trsX [-500 500]]
     [gen-slider "Y" :trsY [-500 500]]
     [gen-slider "Z" :trsZ [-500 500]]

     [:h2 "Rotate"]
     [gen-slider "X" :rotX [-100 100]]
     [gen-slider "Y" :rotY [-100 100]]
     [gen-slider "Z" :rotZ [-100 100]]
     
    
     [:h2 "Perspective"]
     [gen-slider "Perspective" :perspective [0 1000]]
     [gen-slider "X-Origin" :origin-x [0 100]]
     [gen-slider "Y-Origin" :origin-y [0 100]]

     [:h2 "General"]
     [:button {:on-click #(reset! temp temp-defaults)} "Reset"]
     [:br]
     [textbox]]))

(defn render-graph*
  []
  (into
              
     [:div ($ {:position "relative"
               :transform "rotatesY(30deg)"})]
     
     (for [i (range 10)]

       (let [p (apply str "M 0 0" (map (fn [x]
                                         (str " L " x  " " (+ x x)))
                                       (range 20)))]
         

         [:svg ($ {:height "100vh"
                   :width "100vh"
                   :position "absolute"
                   :transform (str  "translateY(" i "em)")})

          [:circle {:r "1em" :cx "1em" :cy "1em"}]
          [:path {:d p
                  ;; "L0 0 L1 1"
                  ;;  "M 100 350 l 150 -300"
                  :stroke "red"}]
          [:line {:x0 0 :y0 0 :x1 3 :y1 3}]]))))

(defn render-graph
  []
  (let [p (apply str "M 0 0" (map (fn [x]
                                    (str " L " x  " " (+ x x)))
                                  (range 20)))

        h 300
        w 300

        scale (fn [min max]
                (let [span (- max min)]
                  (fn [x]
                    (+ min (/ (- x min) span)))))

        x-scale (scale -150 150)
        y-scale (scale 150 -150)
        
        y-shift (* 0.5 h)
        

        stroke-width "0.1em"

        f (fn [x] (* x x))
        
        curve (apply str "M 0 0 " (map (fn [x]
                                         (let [s
                                               (str " L " (x-scale x) " " (y-scale (f x)))]
                                          
                                           s))
                                       (range 30)))

        
        curve [:path {:d curve
                      :stroke-width stroke-width
                      :stroke "red"
                      :style {:transform (str "translateY(" y-shift "px)")}}]
        
        y-axis [:path {:d (str "M 150 0" " L 150 300")
                       :stroke-width stroke-width
                       :stroke "white"}]

        x-axis [:path {:d (str "M 0 150" " L 300 150")
                       :stroke-width stroke-width
                       :stroke "white"}]

        z-axis [:path {:d  (str "M 0 150" " L 300 150")
                       :stroke "white"
                       :stoke-width stroke-width
                       :style {}}]]

    [:div ($ {:position "relative"
              :transform "translate3d(200px, 100px, 100px)"
              :transform-style "preserve-3d"})


     (when false
       [:div ($ {:transform "translateZ(150px) translateX(150px) rotateY(90deg)"
                 ;;    :transform-style "preserve-3d"
                 
                 :position "absolute"
                 })
        
        [:svg ($ {:height "300px"
                  :width "300px"
                  
                  :position "absolute"
                  })

         

         #_ [:rect ($ {:fill "none"
                       :stroke "green"
                       :height "300px"
                       :width "300px"
                       :stroke-width "5px"})]

         #_[:circle {:r "10px" :cx "10px" :cy "10px"}]
         z-axis]])

     [:svg ($ {:height "300px"
               :width "300px"
               :transform "translateZ(0px)"
               :position "absolute"})

      #_[:rect  ($ {:fill "none" :stroke "pink"
                  :height "300px"
                    :width "300px"})]

      curve 
      
      x-axis
      y-axis
      
      

      

      
      #_[:path {:d p
                ;; "L0 0 L1 1"
                ;;  "M 100 350 l 150 -300"
                :stroke "red"}]
      #_[:line {:x0 0 :y0 0 :x1 3 :y1 3}]]]))

(defn test-page

  []

  (reagent/create-class

   {:reagent-render
     
    (fn []
      
      [:div ($ {:font-size "15px"
                :display "flex"
                :flex-direction "row"})

       [control-panel]
       

       (letfn [(render-coll [tag params & content]

                 (let [params (update params :class (fnil conj #{"coll"}) "coll")]

                   (into [tag params]
                         (mapv (fn [idx content]
                                 ^{:key idx} content)
                               (range)
                               content))))]
         
         (let [{:keys [trsX
                       trsY
                       trsZ
                       rotX
                       rotY
                       rotZ
                       angle
                       origin-x
                       origin-y
                       perspective]} @temp]

           [:div ($ {:perspective-origin (str origin-x "%, " origin-y "%)")       
                     :perspective (str perspective "px")})
            
            [:div#target ($ {:class "preserve"}
                   {:transform (str "translate3d(" trsX "px,  " trsY "px, " trsZ "px) "

                                                  "rotate3d("
                                                  (/ rotX 100) ", "
                                                  (/ rotY 100) ", "
                                                  (/ rotZ 100) ", " angle "deg)")
                                  
                      :transition "transform 1.5s"
                      :position "relative"
                      :transform-style "preserve-3d"})


             [render-graph]
             #_[render-root]
             
           ;;  [render-interior]
            #_[math-display]
             ]]))])}))








;;################################################################
;; Mount
;;################################################################

(defn mount [el]
  (rdom/render [mp/generate-site] el))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app

;;################################################################
;; Initalizing...
;;################################################################

(defmethod render-page :tab/test
  [id _]
  [test-page])


(rf/reg-event-db

 :init-ctx
 
 (fn [db [_ ctx]]
   (merge db
          init-dom
          {ctx {:header/current-tab :tab/demo
                :dev-mode? true}})))


(defn init-db
  []
  (rf/dispatch-sync [:init-ctx :root]))


(init-db)
(mount-app-element)


;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))




