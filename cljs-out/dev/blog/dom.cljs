
(ns ^:figwheel-hooks blog.dom
  (:require
   [re-frame.core :as rf]
   [reagent.core :as reagent :refer [atom]]))


(def global-state
  (cljs.core/atom {::copy {}
                   :root (atom {:text "root"
                                 :nodes [:a :b]})
                    :a (atom {:text "a"})
                    :b (atom {:text "b"})
                    :c (atom {:text "c"})
                    :d (atom {:text "d" :nodes [:a :e]})
                    :e (atom {:text "Antelope"})}))


