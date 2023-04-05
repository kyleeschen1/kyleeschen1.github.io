

(ns ^:figwheel-hooks blog.main-page
  
  (:require

   [blog.demo :refer [render-essay-text]]
   [blog.utils :refer [render-page <sub >evt $]]
   [blog.render :refer [math-display render]]
   
   [re-frame.core :as rf]))


;;################################################################
;; Main Page
;;################################################################

(declare gen-row-of-cols)

(defn generate-site
  []
  [render-page :main-page :root])

(defmethod render-page :main-page
  
  [_ ns]

  (fn [_ ns]

    [:div
     [render-page :header-tabs ns]
     [render-page :page-body ns]]))



(defmethod render-page :page-body
  [_ _]
  
  (fn [_ ns]
    
    (let [tab (<sub [:header/current-tab ns])]
      
      [:div.page-body [render-page tab ns]])))

;;----------------------------------------------
;; Header Bar
;;----------------------------------------------

(declare gen-header-tab)

(defmethod render-page :header-tabs
  
  [_ ns]
   
  [:div.header
   
   [:div.header-name  "Kyle Eschen"]

   [gen-header-tab "About" :tab/about ns]
   [gen-header-tab "Demo" :tab/demo ns]
   [gen-header-tab "Videos" :tab/videos ns]
   [gen-header-tab "Contact" :tab/contact ns]
   [gen-header-tab "Test" :tab/test ns]])

(defn gen-header-tab
  
  [label tag ns]

  (fn [label tag ns]

    (let [cls (when (= tag (<sub [:header/current-tab ns]))
                 "focused-header-tab")]
      
      [:button.header-tab

       {:class cls
        :on-click #(>evt [:header/switch-tab tag ns])}
       
       label])))

;;------------------------------------------
;; Events
;;------------------------------------------

(rf/reg-event-db
 
 :header/switch-tab
 
 (fn [db [_ tab ns]]
   
   (assoc-in db [ns :header/current-tab] tab)))

(rf/reg-sub
 
 :header/current-tab
 
 (fn [db [_ ns]]
   
   (get-in db [ns :header/current-tab])))


;;################################################################
;; Sub-Pages
;;################################################################

(defmethod render-page :tab/about
  [_ ns]
  (gen-row-of-cols
   [0.4 [:div "There is no interesting information about me."]]))

(defmethod render-page :tab/videos
  [_ ns]
  [:div "I am not fit for the screen."])

(defmethod render-page :tab/contact
  [_ _]
  [:div "There is no value in contacting me."])



;;################################################################
;; Demo Page
;;################################################################

(defmethod render-page :essay-text-col
  [_ ctx]
  
  [:div.text-col
   [render-essay-text ctx]])

(defmethod render-page :essay-display-col
  [_ _]
  [:div.display-col
   
   [math-display]])

(defmethod render-page :tab/demo
  
  [_ ns]
  
  (gen-row-of-cols
   
   [0.4 [render-page :essay-text-col ns]]
   [0.6 [render-page :essay-display-col ns]]))


;;################################################################
;; Helpers
;;################################################################


(defn gen-row-of-cols
  
  [& cols]

  (let [cols (mapv (fn [[flex col]]
                     [:div {:style {:flex flex}} col])
                   cols)

        row [:div {:style {:display "flex"}}]]
    
    (into row cols)))
