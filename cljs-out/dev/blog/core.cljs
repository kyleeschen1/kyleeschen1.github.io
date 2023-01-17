(ns ^:figwheel-hooks blog.core
  (:require

   [re-frame.core :as rf]

   [cljs.repl :refer [source]]
   [cljsjs.waypoints]

   
   [goog.dom :as gdom]
   [goog.string :as gstring]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]))


;;################################################################
;; Re-Frame
;;################################################################

(defn <sub
  [params]
  @(rf/subscribe params))

(defn >evt
  [params]
  (rf/dispatch params))


;;################################################################
;; Scrolling
;;################################################################



(defn set-scroll

  "Sets some action for when
   a particular element hits
   the viewport."

  [id f]
  
  (let [element (.getElementById js/document id)
        params {:element element
                :handler f
                :offset "25%"}]
    
    (js/Waypoint. (clj->js params))))

(defmulti on-scroll
  
  (fn [event-id dir params]
    
    [event-id (keyword dir)]))

(defmethod on-scroll :default
  [id dir _]
  (println (str  "Scrolled: " id " " dir)))


(defmethod on-scroll [:a-root :down]
  [_ _ _]
  (println "A scrolled down!"))

(defmethod on-scroll [:b :up]
  [_ _ _]
  (println "B scrolled up!"))


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
 
 (fn [[focus-id] [_ id]]
   
   (= id focus-id)))



(defn add-scroll
  
  [id ctx element]

  (fn [id ctx element]
    
    (reagent/create-class
     
     {:component-did-mount
      (fn [this]
        (when (= :root ctx)
          (set-scroll (str id) (fn [dir]
                                 (>evt [:set-focus id ctx])
                                 (on-scroll (keyword id) dir nil)))))

      
      :reagent-render
      (fn [id ctx element]
        
        [:div {:id id
               :style {:border (when (<sub [:in-focus? id])
                                 "0.2em solid red")
                       :padding "1em 1em 1em 1em"
                       }}
         element])})))


(defn add-scrolls
  
  [ctx]

  (reagent/create-class

   {:component-will-unmount
    
    (fn [_]
      (>evt [:set-focus nil ctx]))
    
    :reagent-render
    
    (fn [ctx]
      [:div {:style {:height "150em"
                     :padding-top "50%"}}

       [add-scroll "Title" ctx [:h2 "Demo"]]
       [add-scroll "a" ctx [:div "1) Action 1"]]
       [add-scroll "b" ctx [:div "2) Action 2"]]
       [add-scroll "c" ctx [:div "3) Action 3"]]])}))

;;################################################################
;; Symbols
;;################################################################


(defn sym
  [kw]
  (gstring/unescapeEntities (str "&" (name kw) ";")))

#_(sym :nexist)





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
                  :font-family "Verdana"

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


(defmethod render-page :tab/about
  [_ ctx]
  (gen-row-of-cols
   [0.3 [:div "There is no interesting information about me."]]))

(defmethod render-page :essay-text-col
  [_ ctx]
  [:div {:style {:padding "1em 1em 1em 1em"}}
   [add-scrolls ctx]])

(defmethod render-page :essay-display-col
  [_ ctx]
  [:div {:style {:padding "1em 1em 1em 1em"
                 :width "70%"
                 :position "fixed"}}

   [:div {:style {:font-size "0.8em"
                  :width (str (* 0.8 70) "%")
                  :position "sticky"}}

    [render-page :main-page (keyword (str (name ctx) "-1"))]]
   #_[:div {:height "500px"
            :width "500px"
            :display "inline-block"
            :style {:border "0.1em solid black"
                    ;; :position "sticky"
                    }}]])

(defmethod render-page :tab/essays
  [_ ctx]
  (gen-row-of-cols 
   [0.3 [render-page :essay-text-col ctx]]
   [0.7 [render-page :essay-display-col ctx]]))

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
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
