
(ns ^:figwheel-hooks blog.utils  
  (:require 
   [re-frame.core :as rf]))

;;################################################################
;; Utilities
;;################################################################

(defmulti render-page
  (fn [id _]
    id))

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
