
(ns ^:figwheel-hooks blog.dom
  (:require
   [com.rpl.specter :as s]
   [cljs.pprint :refer [pprint]]
   
   [re-frame.core :as rf]
   [reagent.core :as reagent :refer [atom]]))

(def dom
  (cljs.core/atom {:root (atom {:nodes #{} :collection? true :idx :root})}))



(defn show-ids
  []
  (pprint (s/select [s/ATOM s/MAP-VALS s/ATOM (s/view #(select-keys % [:idx :form] ))] dom)))


(defn assoc-dom!
  
  [idx data]
  
  (if-let [node (get @dom idx)]
    
    (reset! node data)
    (swap! dom assoc idx (atom data)))
    
  nil)

(defn update-dom!
  [idx f]
  (let [node (get @dom idx)]
    (swap! node f)
    nil))


(defn add-to-dom!
  
  [anchor data idxs]
  
  (doseq [[idx vals] data]
   
    (assoc-dom! idx vals))
  
  (update-dom! anchor (fn [root]
                        (update root :nodes #(apply conj % idxs))))

  nil)



(defn subscribe
  [idx]
  (-> dom
      deref
      (get idx)
      ((fn [node]
         (when node
           @node)))))




