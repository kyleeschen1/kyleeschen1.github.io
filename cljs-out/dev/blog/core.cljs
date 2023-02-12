(ns ^:figwheel-hooks blog.core
  (:require
   
   [blog.render :refer [math-display]]

   [cljs.repl :refer [source]]
   [cljs.pprint :refer [pprint]]

   [cljs.core.async :as a]
   [clojure.zip :as z]

   [com.rpl.specter :as s]

   [re-frame.core :as rf]
   
   [goog.dom :as gdom]
   [goog.string :as gstring]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]))



;;################################################################
;; Utilities
;;################################################################

(defn <sub
  [params]
  @(rf/subscribe params))

(defn >evt
  [params]
  (rf/dispatch params))

(defn $

  ([style]
   {:style style})

  ([attrs style]
   (assoc attrs :style style)))


;;################################################################
;; Scrolling
;;################################################################


(rf/reg-event-db

 :set-focus

 (fn [db [_ id ctx]]

   (assoc-in db [ctx :focus] id)))


(rf/reg-sub

 :focus-id

 (fn [db _]
   
   (get-in db [:root :focus])))

(rf/reg-sub

 :in-focus?

 :<- [:focus-id]
 
 (fn [focus-id [_ id]]

   (= id focus-id)))



(defn init-scroll

  [node ctx]

  (letfn [(get-el-in-window []
            
            (.elementFromPoint js/document 50 200))
          
          (set-focus-on []
            
            (let [id (.-id (get-el-in-window))]
              
              (when (not= id "")
  
                (>evt [:set-focus id ctx]))))]
     
    (.addEventListener js/document "scroll" set-focus-on)))


(defn track-scrolling!
  [ctx]
  (letfn [(get-el-in-window []
            
            (.elementFromPoint js/document 50 300))]

    (fn []
      (let [id (.-id (get-el-in-window))]
        
        (when (not= id "")
          
          (>evt [:set-focus id ctx]))))))


(defn add-text
  [id element]
  
  (fn [id element]
    
    [:div {:id id
           :style {:padding "1em 1em 1em 1em"}
           :class #{(when (<sub [:in-focus? id])
                      "focused")
                    }}
     
     element]))


(defn render-essay-text
  
  [ctx]

  (let [ts! (track-scrolling! ctx)]

    (reagent/create-class

     {:component-did-mount
      (fn [this]
        (js/document.addEventListener  "scroll" ts!))

      :component-will-unmount
      (fn [this]
        (js/document.removeEventListener "scroll" ts!))
      
      :reagent-render

      (fn [ctx]

        (into
         
         [:div {:style {:min-height "150em"
                        :padding-top "1em"}}

       
          [add-text "Title"  [:h2 "Demo"]]

          [add-text "Disclaimer"
           "To the right one sees a meaningless array of symbols drifting like pollen in bile. In an effort to appear profound, I have made myself look all the more mathematically illiterate."]

          [add-text "Lemons"

           "What is this a demo of? In a word, incompetence. Now, for some enumerated gibberish:"]]
         
         (for [i (range 20)]

           (let [i (inc i)
                 id (str "par-" i)
                 text (apply str i ") "(take 10 (repeat "stunning prose attempt...")))]

             ^{:key i} [add-text id text]))))})))







;;################################################################
;; Re-Frame
;;################################################################

(rf/reg-event-db

 :init-ctx
 
 (fn [db [_ ctx]]
   (merge db
          {ctx {:current-tab :tab/about}})))

(defn init-db
  []
  #_(rf/dispatch-sync [:init-ctx :sub])
  #_(rf/dispatch-sync [:init-ctx :root]))

;;################################################################
;; Main
;;################################################################

(rf/reg-event-db
 
 :switch-tab
 
 (fn [db [_ tag ctx]]   
   (assoc-in db [ctx :current-tab] tag)))

(rf/reg-sub
 
 :current-tab
 
 (fn [db [_ ctx]]
   (get-in db [ctx :current-tab])))


(defmulti render-page
  (fn [id _]
    id))

(defn gen-header-tab
  
  [label tag ctx]

  (let [data (atom {:font-size "1em"
                    :padding "none"
                    :background "none"
                    :border "none"})]
    
    (fn [label tag]

      (let [style (if (= tag (<sub [:current-tab ctx]))
                    {:color "red" :font-weight "bold"}
                    {:color "black"})]
        
        [:button {:style (merge @data style)
                  :on-click #(>evt [:switch-tab tag ctx])
                  :on-mouse-over #(swap! data merge {:font-weight "bold"})
                  :on-mouse-out #(swap! data merge {:font-weight nil})}
         
         label]))))

(defmethod render-page :header-tabs
  
  [_ ctx]

  [:div {:style {:top "0px"
                 :position "sticky"
                 :background "white"}}
   
   [:div {:style {:display "flex"
                  :flex-direction "row"
                  :gap "3%"
                  :justify-content "flex-start"
                  :align-items "flex-end"

                  :border-bottom "solid 0.2em black"
                  :padding "1em 1.5em 1em 1.5em"}}
    
    [:div {:style {:font-size "1.5em"
                   :font-weight "bold"}} "Kyle Eschen"]


    [gen-header-tab "About" :tab/about ctx]
    [gen-header-tab "Essays" :tab/essays ctx]
    [gen-header-tab "Videos" :tab/videos ctx]
    [gen-header-tab "Contact" :tab/contact ctx]]])


(defn gen-row-of-cols
  
  [& cols]

  (let [cols (mapv (fn [[flex col]]
                     [:div {:style {:flex flex}} col])
                   cols)

        row [:div {:style {:display "flex"}}]]
    
    (into row cols)))

(rf/reg-sub

 :text

 (fn [{:keys [text]} _]
   text))

(defmethod render-page :tab/about
  [_ ctx]
  (gen-row-of-cols
   [0.3 [:div "There is no interesting information about me."]]))

(defmethod render-page :essay-text-col
  [_ ctx]
  [:div {:style {:padding "1em 1em 1em 1em"}}
   [render-essay-text ctx]])


 #_(comment
      ;; Re-rendering whole website
      [render-page :main-page (keyword (str (name ctx) "-1"))]
      [:div {:height "500px"
             :width "500px"
             :display "inline-block"
             :style {:border "0.1em solid black"
                     ;; :position "sticky"
                     }}])


(defmethod render-page :essay-display-col
  [_ ctx]
  [:div {:style {:padding "1em 1em 1em 1em"
                 :width "70%"
                 :position "fixed"}}

   [:div {:style {:font-size "0.8em"
                  :width (str (* 0.8 70) "%")
                  :position "sticky"}}

    [math-display]]])

(defmethod render-page :tab/essays
  [_ ctx]
  (gen-row-of-cols 
   [0.3 [render-page :essay-text-col ctx]]
   [0.7 [render-page :essay-display-col ctx]]))

(def essays
  [{:title "Demos"
    :summary "A collection of demos."
    :id :essay/demos}
   {:title "On Yams"
    :summary "Some thoughts on nature's most perfect creation."
    :id :essay/yams}
   {:title "On Eggs"
    :summary "Some thoughts on nature's second most perfect creation."
    :id :essay/eggs}])

(defn render-essay-link
  [{:keys [id title summary]}]
  [:div 
   [:button {:style {:margin-left "1em"
                     :padding "0em 0.5em 1em 0em"
                     :font-size "1em"
                     
                     :background "none"
                     :border "none"}
             :on-click #(println id)}
    title]])

#_(defmethod render-page :tab/essays
  [_ ctx]

  (into
   
   [:div {:style {:display "flex"
                  :flex-direction "column"
                  :justify-content "flex-start"
                  }}

    [:div {:style {:margin-bottom "1em"}}

     "As you can see, I am very, very prolific. Please choose a title."]] 

   
   (for [essay essays]
     
     (let [{:keys [id]} essay]

       ^{:key id} [render-essay-link essay]))))

(defmethod render-page :tab/videos
  [_ ctx]
  [:div "I am not fit for the screen."])

(defmethod render-page :tab/contact
  [_ ctx]
  [:div "There is no value in contacting me."])




(defmethod render-page :page-body
  [_ ctx]
  
  (fn [_ ctx]
    
    (let [tab (<sub [:current-tab ctx])]
      
      [:div {:style {:font-size "1em"                  
                     :margin "3em 1em 1em 1em"}}
       
       ^{:key :page} [render-page tab ctx]])))


(rf/reg-sub
 
 :exists?
 
 (fn [db [_ ctx]]
   
   (get db ctx)))


(defmethod render-page :main-page
  [_ ctx]

  (>evt [:init-ctx ctx])

  (fn [_ ctx]

    (if-not (<sub [:exists? ctx])

      [:div]

      [:div {:class (name ctx)}
       [render-page :header-tabs ctx]
       [render-page :page-body ctx]])))



(defn main-page
  []
  [render-page :main-page :root])

;;################################################################
;; Mount
;;################################################################



(defn mount [el]
  (rdom/render [main-page] el))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app


(init-db)
(mount-app-element)


;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  ;;(init-scroll)
  (mount-app-element))






;;################################################################
;; Event Zipper
;;################################################################

(def script

  [{:text "Jowls"
    :time 1000}

   {:children [:nodes]
    :nodes
    
    [{:text "Yams"
      :time 1400}
     {:text "Lemons"
      :time 2000}
     (fn []
       [{:text "===="
         :time 1400
         }
        {:text "In function!"
         :time 3000}])]}
   {:text "Eggs"
    :time 500}
   {:text "Done"
    :time 300}])

(defn gen-schedule
  [script]
  (letfn [(branch? [node]
            (or (vector? node)
                (:children node)))
          
          (children [node]
            (if (vector? node)
              node
              (map node (:children node))))
          
          (make-node [node children]
            (if (map? node)
              (merge node (zipmap (:children node) children))
              (with-meta (vec children) (meta node))))]
    
    (z/zipper branch? children make-node script)))

(def events
  (a/chan))


(def process-queue
  (cljs.core/atom #queue []))

(defn get-next-process
  []
  (when-let [p (peek @process-queue)]
    (swap! process-queue pop)
    p))
          

(defmulti update-schedule
  (fn [{:keys [tag]} _ _]
    tag)) 

(defmethod update-schedule :default
  [_ s env]
  [s env]) 

(defn at-top?
  [s]
  (nil? (:path s)))

(defmethod update-schedule :init-process
  
  [{:keys [ast]} s env]
  
  (let [s (cond

            (nil? s)
            (gen-schedule ast)

            (at-top? s)
            (z/edit s (fn [node] [ast node]))

            :else
            (z/left (z/insert-left s ast)))]

    [s  env]))

(defmethod update-schedule :coroutine
  
  [ast s env]
  
  (let [{:keys [run routines]} ast

        routines (mapv (fn [[k v]]
                         (let [loc  (gen-schedule v)]
                           [k (vary-meta loc merge {:routine-key k})]))
                         routines)

        routines (into {} routines)

        _ (println routines)
        
          routines (conj routines {:main s})

         
          env (update env :processes merge routines)]

 
      [(run routines)  env nil]))

(defmulti execute-schedule
  
  (fn [s env]
    
    (cond
      (nil? s) :nil?
      (z/end? s) :end?
      (z/branch? s) :branch?
      (fn? (z/node s)) :fn?)))


(defmulti ast->db
  (fn [{:keys [tag]} _]
    tag))

(defmethod ast->db :default
  [ast _]
  ast)



(rf/reg-event-db

 :db-update

 (fn [db [_ ast]]
   
   (let [db* (ast->db ast db)]
     
     (merge db db*))))



(defmethod execute-schedule :default
  
  [s env]


  (cond


    (= :yield (:tag (z/node s)))
    (let [{:keys [to]} (z/node s)

          r (:routine-key (meta s))
          
          env (update env :processes merge {r (z/next s)})
          s (get-in env [:processes to])]
      
      [s env 0])

    :else

    (let [node (z/node s)]
      
      (>evt [:db-update node])
      
      [(z/next s) env (:time node)])))


(defmethod execute-schedule :end?
  [s env]
  [nil env 1000])

(defmethod execute-schedule :nil?
  [s env]
  [s env 1000])

(defmethod execute-schedule :branch?
  [s env]
  [(z/down s) env 0])


(defmethod execute-schedule :fn?
  [s env]
  [(z/edit s (fn [f] (f))) env nil])




(defn run-scheduler
  
  []
  
  (a/go-loop [s nil
              env {}]

    (let [[s env time] (if-let [p (get-next-process)]
                         (update-schedule p s env)
                         (execute-schedule s env))]

      (when time
        (a/<! (a/timeout time)))
      
      (recur s env))))



(defmulti gen-process-ast
  (fn [{:keys [tag]}]
    tag))

(defmethod gen-process-ast :default
  [{ast :ast}]
  {:tag :init-process
   :id (gensym)
   :ast ast})

(defmethod gen-process-ast :coroutine
  [_]
  
  {:tag :coroutine
   :run :first
   :routines {:first [{:text "Thread 1: A"
                       :time 1000}
                      
                      {:text "Thread 1: B"
                       :time 1000}
                      
                      {:tag :yield
                       :to :second}

                      {:children [:temp :nodes]
                       :temp [{:text "eggs"
                               :time 1000}
                              
                              {:tag :yield
                               :to :second}]
                       :nodes
                       [{:text  "Thread 1: C"
                         :time 1000}
                        
                        {:text  "Thread 1: D"
                         :time 1000}]}

                     {:tag :yield
                       :to :main}]

              :second [{:text "Thread 2: A"
                        :time 1000}
                       
                       {:children [:nodes]
                        :nodes [{:text "Thread 2: B"
                                 :time 1000}
                                {:tag :yield
                                 :to :third}]}
                      
                      {:tag :yield
                       :to :first}

                      {:text  "Thread 2: C"
                       :time 1000}
                       
                      {:text  "Thread 2: D"
                       :time 1000}

                      {:tag :yield
                       :to :first}]

              :third [{:text "Third"
                       :time 1000}
                      {:tag :yield
                       :to :second}]}})


(rf/reg-fx

 :add-to-process-queue!

 (fn [ast]

   (swap! process-queue conj ast)))

(rf/reg-event-fx

 :schedule

 (fn [_ [_ params]]

   (let [ast (gen-process-ast params)]
     
     {:add-to-process-queue! ast})))

(run-scheduler)

(def script*
  [{:text "Yaaaa"
    :time 5000}
   {:text "Yeet"
    :time 3000}])




;;################################################################
;; State Zipper
;;################################################################


#_(defn state-zip
  [ast env]
  (letfn [(branch? [node]
            (:nodes node))
          (children [node]
            (s/select [(s/keys (:children node)) s/MAP-VALS] node))
          (make-node [node children]
            (swap! env apply merge (map (fn [{:keys [id] :as node}]
                                    {id node})
                                  children))
            node)]))

(defn branch?
  [node]
  (:nodes node))

(defn children
  [node]
  (:nodes node))

(defn state-zip
  
  [ast env]

  (letfn [(*branch? [node]
            (branch? node))
          
          (*children [node]
            (vals (select-keys @env (children node))))

          (index [data nodes]
            (->> nodes
                 (map (fn [node] {(:id node) node}))
                 (apply merge data)))
          
          (make-node [node children]
            (swap! env index children)
            node)]

    (z/zipper *branch?
              *children
              make-node
              ast)))

(def counter (atom 0))


(defn walk
  
  [root data env f]
  
  (let [;;root (assoc data :Root {:nodes [root]})
        data (cljs.core/atom data)]

    (loop [loc (state-zip {:nodes [root]}  data)]
     
      (if (z/end? loc)
        
        @data
        
        (recur (z/next (z/edit loc f)))))))


(def data
  {:root {:id :root
          :nodes [:a :b]}
   :a {:id :a
       :nodes [:c]}
   :b {:id :b}
   :c {:id :c}})

(def t
  {:id :root
   :nodes [:a :b]})


;;################################################################
;; Div
;;################################################################

(def global-state
  (cljs.core/atom {::copy {}
                   :root (atom {:text "root"
                                 :nodes [:a :b]})
                    :a (atom {:text "a"})
                    :b (atom {:text "b"})
                    :c (atom {:text "c"})
                    :d (atom {:text "d" :nodes [:a :e]})
                    :e (atom {:text "Antelope"})}))


(declare merge!)

(rf/reg-fx

 :data->dom!

 (fn [data*]

   
   (merge! data*)))

(rf/reg-fx

 :block-event-loop!

 (fn [data*]

   (a/go
     (a/<! (a/timeout 1000))
     (println "Done"))))

(defn update-db-dom-data
  [db data*]
  (update db :dom merge data*))

(rf/reg-event-fx

 :update-data

 
 (fn [{:keys [db]} [_ data*]]

   {:db (update-db-dom-data db data*)
    :data->dom! data*
    :block-event-loop! data*}))


(defn add!
  [id data]
  (swap! global-state assoc-in [::copy id] data)
  (swap! global-state assoc id (atom data))
  nil)

(defn remove!
  [id data]
  (swap! global-state dissoc id)
  nil)

(defn update!
  [id f]
  #_(swap! global-state update-in [::copy id] (fn [node]
                                              (f node)))
  (swap! global-state update id (fn [node]
                                  (swap! node f)
                                  node))
  nil)


(defn merge!
  [map]
  (doseq [[k v] map]
    (update! k (fn [_] (println k) v))))









(def prefix
  (cljs.core/atom ""))

(defn global-state*

  ([]
   (global-state* :root))
  
  ([id]
   (let [state (@global-state id)]
     
     (reagent.core/create-class
      
      {:component-did-mount
       (fn [_]
         (println "mounted " id))

       :component-did-update
       (fn [_]
         (println (str "updated " id)))

       :component-will-unmount
       (fn [_]
         (println (str "will unmount " id)))

       :reagent-render
       (fn [_]
 
         (let [{:keys [style text nodes close]} @state]

           (conj
            
            [:div {:style (assoc style
                                 :display "flex"
                                 :flex-direction "column"
                               ;;  :position "relative"
                                 ;; :fit-content true
                                 :font-size (when close
                                              "0em")
                                    :transition "2000ms")
                   
                   :data-before "("
                   :data-color "red"} ]

            (into

             [:div {:class []
                    :style (merge (when close
                                    {:font-size "0em"
                                     ;;:padding-left "50em"
                                    ;; :padding-right "50em"
                                     })

                                  {:vertical-align "center"
                                   :display "inline-block"
                                           :position "relative"
                                   ;;:justify-content "center"
                                   :transition "2000ms"})}

              (str @prefix " " text)]
             
             (for [n nodes]
               
               ^{:key n} [global-state* n])))))}))))


(defn set-scroll*

  "Sets some action for when
   a particular element hits
   the viewport."

  [id f]
  
  (let [element (.getElementById js/document id)
        params {:element element
                :handler f
                :offset "25%"}]
    
    (js/Waypoint. (clj->js params))))

(declare essay)

(def essay-data
  (cljs.core/atom {:focus nil}))

(defn update!!
  [id f & args]
  #_(swap! global-state update-in [::copy id] (fn [node]
                                              (f node)))
  (swap! essay-data update id (fn [node]
                                  (apply swap! node f args)
                                  node))
  nil)

(declare render-essay*
         essay->data)

(defn render-essay
  [essay]
  (let [data (essay->data essay)
        id (s/select-one [s/LAST s/MAP-VALS s/ATOM :id] data)]
   
    (swap! essay-data  (fn [essay-data data] (apply  merge essay-data data)) data)
    [render-essay* id]))

(defn merge!!
  [map]
  (doseq [[k v] map]
    (update!! k (fn [_] (println k) v))))

(defn render-essay*
  
  
  [id]
  
  (let [id-enter  (str id "-enter")
        id-exit (str id "-exit")
        
        div-enter [:div {:id id-enter}]
        div-exit [:div {:id id-exit}]
      
        {:keys [event] :as data} (deref (id @essay-data))]

    (fn [id]
      
      (reagent.core/create-class
       
       {:component-did-update
        (fn [_]
          #_(println (str id " updated.")))
        
        :component-did-mount
        (fn [_]

          (set-scroll* id
                       (fn []
                         (when (:token? data)
                           
                           (let [focused-id (:focus @essay-data)
                                 ]
                             
                             (when focused-id
                               (update!! focused-id (fn [node]
                                                      (-> node
                                                          (assoc-in [:params :style :transition] "1000ms" )
                                                          (assoc-in [:params :style :text-outline] nil)))))

                             (update!! id (fn [node]
                                            (-> node
                                             (assoc-in [:params :style :transition] "1000ms" )
                                                 (assoc-in [:params :style :text-outline] "1px red" ))
                                            ))

                             (swap! essay-data assoc :focus id))))))

        :reagent-render
        (fn [id]
          (let [{:keys [tag params forms]} (deref (id @essay-data))]

            (conj (into [tag params div-enter] forms) div-exit)))}))))



(defn parseable-text?
  [node]
  (and (vector? node)
       (not= :br (first node))))

(defn parse-essay-on-descent
  [node]
   (if (parseable-text? node)
     (let [[tag params & forms] node

           [params forms] (if (map? params)
                            [params forms]
                            [{} (cons params forms)])

           id (gensym "essay-")
           
           data (meta node)

           token? (not (some parseable-text? forms))]

       (merge
        
        {:tag tag
         :token? token?
         :params (assoc  params :id id)
         :id id
         :forms forms}

        data))
     node))





(def ESSAY
  (s/recursive-path [prewalk-f] p
                    (s/if-path parseable-text?
                               [(s/view prewalk-f) (s/continue-then-stay :forms s/ALL p)]
                               s/STAY)))
(defn parse-essay
  [essay]

  (s/transform (ESSAY parse-essay-on-descent)
               identity ;;parse-essay-on-ascent
               essay))

(def ESSAY-PARSED
  (s/recursive-path [] p
                    (s/if-path map?
                               [(s/continue-then-stay :forms s/ALL p)]
                               s/STAY)))
(defn essay->data
  [essay]
  (s/select [(s/pred :forms)
             ESSAY-PARSED
             (s/view (fn [node]
                       (when (map? node)
                         {(:id node) (atom (update node :forms (fn [forms]
                                                                 (map (fn [node]
                                                                             (if-let [id (:id node)]
                                                                               ^{:key id} [render-essay* id]
                                                                               node))
                                                                           forms))))})))
             (s/pred (complement nil?))]
            (parse-essay essay)))

(def essay
  (into
   [:div {:style {:top "35vh"
                  :height "1500px"

                  :padding-top "1em"}}]


   (for [i (range 1)]
     ^{:key i}
     [:div [:h1 "Linear Maps"]

      ^{:event [:dom {:a 14}]}
      [:div "A linear map is a transformation where..."]
      [:br]
      [:div {:style {:padding-top "1em"}}]
      [:div "This means that they preserve vector addition and scalar multiplication."]
      [:br]
      [:div {:style {:padding-top "1em"}}]
      
      [:div "This means that they preserve vector addition and scalar multiplication."]
      [:br]
      [:div {:style {:padding-top "1em"}}]
      
      [:div "This means that they preserve vector addition and scalar multiplication."]
      [:br]
      [:div {:style {:padding-top "1em"}}]
      [:div "This means that they preserve vector addition and scalar multiplication."]])))





(defn log-event
  
  [id parent-id]
  
  (rf/reg-sub

   id

   :-> [parent-id]

   (fn [parent [_ id]]
     (println id)
     (get parent id))))




(def tree
  {
   :a 1
   :b 2
   :c {:children {:d 3 :e 4}}
   
   })

(rf/reg-sub

 :t-root

 (fn [_ _]
   
   tree))

(defn parse-tree

  ([tree]
   
   (parse-tree :t-root tree))
  
  ([parent-id tree]
   
   (let [[k v] tree]
     
     (log-event tree parent-id)
     
     (when-let [{:keys [children]} v]
       
       (doseq [c children]
         
         (parse-tree k c))))))



(defn tree-test
  ([]
   [:div "1"]
   #_(parse-tree tree)
   #_(tree-test :t-root))
  
  ([id]
   (fn [id]
     (let [data (<sub [id])
           contents (if-let [{:keys [children]} data]
                      (for [[k _] children]
                        ^{:key k} [tree-test k])
                      (second data))]
       [:div contents]))))




;;################################################################
;; Nested Website Versions
;;################################################################
;;
;; Shrinks current website to be analyzed by a superset.

#_(defn render-world

  [ i f]

  (fn [i f]

    (println i)
    
    [:div
     [:div ($ {:height (str (/ 20 i) "vh")
               :width (str (/ 100 i) "vh")
               :transition "1000ms"})
      "World"]

     [:div ($ {:display "inline-block"})
      [:div ($ {:display "inline-block"
                ;; :transform (str "translate(" (/ 20 i) "vh, 0px)")
                :width (str (/ 30 i) "vh")
                :height (str (/ 80 i) "vh")
                :border "1px solid black"
                :transition "1000ms"})

       [:button {:on-click f}]]

      [:div ($ {:display "inline-block"
              ;;  :transform (str "translate(" (/ 20 i) "vh, 0px)")
                :width  (str ( / 70 i) "vh")
                :height (str (/ 80 i) "vh")
                :border "1px solid black"
                :transition "1000ms"})]]]))

(defn -scale
  [r i]
  (js/Math.pow r i))

(defn scale
  [r i]
  (reduce +
          (map (partial  -scale r)
               (range i))))

#_(defn render-world

  [i n f]

  (fn [i n f]

    (let [y-scale (scale 0.3 (dec n))
          x-scale (scale 0.2 (dec n))]

      [:div ($ {:position "absolute"
                :border "1px solid black;"
                :height "50%"
                :width "30%"
                :transform (str "translate(" (* 100 x-scale)  "%, " (* 100 y-scale) "%)")
                :transition "3000ms"})

       [:div ($ {;;:position "absolute"
            ;;    :transform (str "scale(" (-scale 0.8 n)  ", " (-scale 0.3 n) ")")
                :transition "3000ms"})
        [:button {:on-click f} (str  "Move Up to World " i)]]])

    #_[:div ($ {:transform "translate(" (scale 0.3 n) "em, " (scale 0.8 n)  "em)"
              :transition "1000ms"
           ;;   :z-index i
              })
     
     [:div ($ {:transform "scale(" (scale 0.3 n) "," (scale 0.8 n)  ")"
               :transition "1000ms"
               :display "flex"
               :flex-direction "row"})

      [:div #_($ {:height (str  200 "px")}) (str  "World " i)]

      
      [:div ($ {;;:display "inline-block"
                ;; :width (str 30 "px")
                ;;  :height (str 20 "px")
                })

       
       [:button {:on-click f} "Move Up World"]]
      [:div ($ {;;:display "inline-block"
                :transform (str "translate(" 50 "%, 20%)")
                ;; :width  (str 70 "px")
                ;;  :height (str 20 "px")
                :border "1px solid red"
                :transition "1000ms"})

       "Toast"]

      ]]))

(defn render-world
  [i distance f]
  (fn [i distance f]

    
    (println "distance")
    (println (str "i: " i))
    (println (str "distance: "  distance))

    
    (let [x-scale (* 100 (scale 0.3 distance))
          y-scale (* 100 (scale 0.5 distance))
          fs (str (js/Math.pow 0.75 (dec  distance)) "em")]
      
      [:div.off-screen
       
       [:div ($ {;;:position "absolute"
                 :transform (str "translate(" x-scale "%, " y-scale "%)")
                 ;;  :height "100%"
                 :width (str (* 0.3 x-scale) "%")
                 :height (str (* 0.5  y-scale) "%")
                 :font-size  fs
                 :transition "4000ms"
                ;; :border "solid black 1px"
                 })

        [:div

         #_($ {:transform "scale(" (-scale 0.3 distance) ", " (-scale 0.5 distance) ")"})
         [:div "Current World: " i]
         [:button {:on-click f}

          [:div ($ {:font-size fs}) (str "Move Up to  World: " (inc i))]]]]])))

(defmethod render-page :main-page*
  [_ ctx]
  (let [worlds (atom 1)
       f  #(swap! worlds inc)]

    (fn [_ ctx]

      (let [n-worlds @worlds]
        (into
         [:div ($ {:height "1500px"
                   :width "1500px"
                   :font-size "1em"})]
         
         (for [i  (reverse (range 1 (inc n-worlds)))]

           (do

             (println i)
             
             ^{:key i} [render-world i (- n-worlds i) f])))))))
