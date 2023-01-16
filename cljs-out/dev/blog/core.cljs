(ns ^:figwheel-hooks blog.core
  (:require

   [re-frame.core :as rf]

   [cljs.repl :refer [source]]

   
   [goog.dom :as gdom]
   [goog.string :as gstring]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]))


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

 :init-db
 
 (fn [db _]

   (merge db
          {:header/selected-tag :tab/about})))

(defn init-db
  []
  (rf/dispatch-sync [:init-db]))

;;################################################################
;; Main
;;################################################################

(defn gen-link
  
  [label]
  
  (fn [label]
    
    [:a [:div.node label]]))

(rf/reg-event-db
 :header/select-tab
 (fn [db [_ tag]]   
   (assoc db :header/selected-tab tag)))

(rf/reg-sub
 :header/selected-tab
 (fn [db _]
   (get db :header/selected-tab)))

(defn <sub
  [params]
  @(rf/subscribe params))

(defn >evt
  [params]
  (rf/dispatch params))

(defn gen-header-tab
  
  [label tag]

  (let [data (atom {:font-size "10px"
                    :padding "none"
                    :background "none"
                    :border "none"})]
    
    (fn [label tag]

      (let [style (if (= tag (<sub [:header/selected-tab]))
                    {:color "red" :font-weight "bold"}
                    {:color "black"})]
        
        [:button {:style (merge @data style)
                  :on-click #(>evt [:header/select-tab tag])
                  :on-mouse-over #(swap! data merge {:font-weight "bold"})
                  :on-mouse-out #(swap! data merge {:font-weight nil})}
         
         label]))))

(defn gen-header-tabs
  
  []

  [:div 
   
   [:div {:style {:display "flex"
                  :flex-direction "row"
                  :gap "3%"
                  :justify-content "flex-start"
                  :align-items "flex-end"
                  :font-family "Verdana"

                  :border-bottom "solid 2px black"
                  :padding "10px 15px 10px 15px"}}
    
    [:div {:style {:font-size "15px"
                   :font-weight "bold"}} "Kyle Eschen"]


    [gen-header-tab "About" :tab/about]
    [gen-header-tab "Essays" :tab/essays]
    [gen-header-tab "Videos" :tab/videos]
    [gen-header-tab "Contact" :tab/contact]]])


(defmulti render-page identity)

(defmethod render-page :default
  [_]
  [:div.row {:style {:width "100%"}}
   [:div.col {:style {:width "30%"}} "There is no interesting information about me."]
   [:div.col {:style {:width "70%"
                      :float "left"}}

    ]])

(defmethod render-page :tab/essays
  [_]
  [:img {:src "images/Henrietta.gif"
           :style {:height "25%"
                   :width "25%"}}]
  #_[:div "I'm not allowed to write according to my publicist."])

(defmethod render-page :tab/videos
  [_]
  [:div "I am not fit for the screen."])

(defmethod render-page :tab/contact
  [_]
  [:div "There is no value in contacting me."])


(defn gen-page-body
  []
  (fn []
    [:div {:style {:font-family "Verdana"
                   :font-size "10px"
                   :margin "30px 10px 10px 10px"}}
     (render-page (<sub [:header/selected-tab]))]))


(defn main-page
  []
  [:div
   [gen-header-tabs]
   [gen-page-body]])

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
