
(ns ^:figwheel-hooks blog.traversals
  (:require
   [clojure.zip :as z]))




;;################################################################
;; Traversals
;;################################################################

(defrecord Return [val])

(defn return?
  [form]
  (instance? Return form))

(defn transition-loc
  
  [loc next-fn]
  
  (case next-fn

    :next (z/next loc)
    :down (z/down loc)

    :skip (or 
           (z/right loc)
           (loop [p loc]
             (if-let [up* (z/up p)]
               (or (z/right up*) (recur up*))
               [(z/node p) :end])))
    
    :stop (assoc loc 1 :end)
    (z/next loc)))

(defn add-return-methods-to-loc
  [loc]
  (letfn [(branch?* [f]
             (fn [node]
               (or (return? node)
                   (f node))))

          (children* [f]
            (fn [node]
              (if (return? node)
                [(:val node) ::return]
                (f node))))

          (make-node* [f]
            (fn [node children]
              (if (return? node)
                (assoc node :val (first children))
                (f node children))))

          (update-methods [methods]
            (-> methods
                (update :zip/branch? branch?*)
                (update :zip/children children* )
                (update :zip/make-node make-node*)))]
    
    (vary-meta loc update-methods)))



(defn gen-walker
  
  [inner-fn outer-fn]

  (fn [loc ctx]
    
    (cond
      
      (z/branch? loc)
      (let [loc (-> loc
                    (assoc-in [1 :ctx] ctx)
                    (update 0 ->Return)
                    (z/down))]
        
        (merge ctx
               
               {:loc loc
                :next-fn :down}
               
               (inner-fn loc ctx)))
      
      (= (z/node loc) ::return)

      (let [loc (z/up loc)
            loc (assoc loc 0 (:val (z/node loc)))
            env (-> loc (get 1) :ctx)]

        (merge ctx
               
               {:loc loc
                :next-fn :skip}

               (select-keys env [:locals :laterals])
               
               (outer-fn loc ctx)))
      
      :else (merge ctx
                   
                   {:loc loc
                    :next-fn :next}

                   (outer-fn loc ctx)))))



(defn traverse
  
  [loc ctx]
  
  (let [ctx (merge {:globals {}
                    :locals {}
                    :laterals {}
                    :inner-fn (constantly nil)}
                   
                   ctx)

        {:keys [outer-fn inner-fn]} ctx


        [loc walker] (if outer-fn
                          
                          [(add-return-methods-to-loc loc)
                           (gen-walker inner-fn outer-fn)]
                          
                          [loc
                           (fn [loc ctx]
                             (merge ctx {:loc loc} (inner-fn loc ctx)))])]
    
    (loop [loc loc
           ctx ctx]

      (if (z/end? loc)
        
        {:loc loc
         :ctx (dissoc ctx :loc :next-fn)}

        (let [{:keys [next-fn loc] :as ctx} (walker loc ctx)]
          
          (recur (transition-loc loc next-fn) ctx))))))


;;###################################################################
;; Standard Zippers
;;###################################################################

(defn ast-zip
  
  [kw ast]
  
  (letfn [(children [node]
            (seq (vals (select-keys node (get node kw)))))

          (make-node [node children]
            (merge node (zipmap (get node kw) children)))]

    (z/zipper kw children make-node ast)))


(declare parse-clj)

(def type->parens
  {:list ["(" ")"]
   :vector ["[" "]"]
   :map ["{" "}"]
   :set ["#{" "}"]})

(defn parse-paren
  [op? text]
  {:tag :paren
   :opening? op?
   :form text})

(defmulti parse-sexpr first)

(defn parse-clj-coll
  
  [code]
  
  (let [type (cond
               (list? code) :list
               (vector? code) :vector
               (map? code) :map
               (set? code) :set
               (map-entry? code) :map-entry)]


    (merge
     
     {:tag type
      :form code
      :token? false
      :nodes  (map parse-clj code)}

     (if-let [parens (type->parens type)]
       
       {:render/children [:op-paren :nodes :cl-paren]
        :op-paren (parse-paren true  (first parens))
        :cl-paren (parse-paren false (second  parens))}
       
       {:render/children [:nodes]}))))

(defn parse-clj-token
  
  [code]
  
  (let [type (cond
               (symbol? code) :symbol
               (number? code) :number
               (string? code) :string
               (boolean? code) :boolean
               (keyword? code) :keyword
               (nil? code) :nil)]

    {:tag type
     :form code
     :token? true}))

(defn parse-clj
  [code]
  (if (coll? code)
    (parse-clj-coll code)
    (parse-clj-token code)))



(defmethod parse-sexpr :default
  
  [[f & args :as form]]
  
  {:tag :invoke
   :form form
 
   :ast/children [:f :args]
   :f (parse-clj f)
   :args (parse-clj args)})



(defmethod parse-sexpr :let
  
  [[op bindings & body :as form]]
  
  {:tag :let
   :form form
   :ast/children [:let :bindings :body]
   :let (parse-clj op)
   :bindings (parse-clj bindings)})
