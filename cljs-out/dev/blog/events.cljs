
(ns  ^:figwheel-hooks blog.events)

(defmulti event :op)

(defmethod event :default
  [{:keys [dom text]}]
  (update-in dom [:root :nodes] conj {:tag :text
                                      :text (if text
                                              text
                                              "Temp")}))

(defmethod event :clear-root
  [{:keys [dom text]}]
  (->  (assoc-in dom [:root :nodes] [])
      ;; (assoc-in [:prev] nil)
     ;;  (assoc-in [:next] nil)
       ))
