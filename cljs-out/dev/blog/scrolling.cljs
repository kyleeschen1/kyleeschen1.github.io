
(ns ^:figwheel-hooks blog.scrolling
  (:require [cljsjs.waypoints]))


;;################################################################
;; Scrolling
;;################################################################

(def scroll-triggers
  (atom {}))

(defn rm-scroll-trigger
  [id]
  (when-let [trigger (get @scroll-triggers id)]
    (.destroy trigger))
  (swap! scroll-triggers dissoc id))

(defn set-scroll-trigger

  "Sets some action for when
   a particular element hits
   the viewport."

  [id f]
  
  (let [element (.getElementById js/document id)
        params {:element element
                :handler f
                :offset "50%"}]
    
    (swap! scroll-triggers assoc id (js/Waypoint. (clj->js params)))))


;;################################################################
;; Reporting Element Id at Position
;;################################################################
;;
;; An alternative approach which calls a function on whatever id
;; scrolls into a specified position

(defn track-scrolling!
  
  [x y action-fn]
  
  (letfn [(get-el-in-window []
            
            (.elementFromPoint js/document x y))]

    (fn []
      
      (let [id (.-id (get-el-in-window))]
        
        (when (not= id "")

          (action-fn id))))))
