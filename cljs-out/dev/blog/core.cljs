(ns ^:figwheel-hooks blog.core
  (:require
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
;; Main
;;################################################################

(defn gen-link
  
  [label]
  
  (fn [label]
    
    [:a [:div.node label]]))

(defn main-page
  
  []
  
  [:div.node 
   [:h2 "Kyle Eschen"]
   [:div "A simple website for a simple man."]
   [gen-link "About"]
   [gen-link "Essays"]
   [gen-link "Videos"]])

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
(mount-app-element)

;; specify reload hook with ^:after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
