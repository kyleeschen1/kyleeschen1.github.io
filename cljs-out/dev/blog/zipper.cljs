
(ns ^:figwheel-hooks blog.zipper
  (:require [clojure.zip :as z])
  (:refer-clojure :exclude (replace remove next)))

;;#########################################################
;; Zippers
;;#########################################################
;;
;; Modifies clojure.zip and specter zip lenses almost verbatim,
;; adding the following:
;;
;; 1) A record implementation for speed
;; 2) A ctx slot that allows for data to be passed around during traversals

(defrecord Zipper [branch?
                   children
                   make-node
                   node
                   ctx
                   ppath
                   pnodes
                   l
                   r
                   end?])


(defn zipper
  "Creates a new zipper structure. 
  branch? is a fn that, given a node, returns true if can have
  children, even if it currently doesn't.
  children is a fn that, given a branch node, returns a seq of its
  children.
  make-node is a fn that, given an existing node and a seq of
  children, returns a new branch node with the supplied children.
  root is the root node."
  {:added "1.0"}
  [branch? children make-node root ctx]
  (->Zipper branch?
            children
            make-node
            root
            ctx
            nil
            nil
            nil
            nil
            nil))

(defn node
  "Returns the node at loc"
  {:added "1.0"}
  [loc]
  (:node loc))

(defn branch?
  "Returns true if the node at loc is a branch"
  {:added "1.0"}
  [loc]
  ((:branch? loc) (node loc)))


(defn children
  "Returns a seq of the children of node at loc, which must be a branch"
  {:added "1.0"}
  [loc]
    (if (branch? loc)
      ((:children loc) (node loc))
      (throw "called children on a leaf node")))

(defn make-node
  "Returns a new branch node, given an existing node and new
  children. The loc is only used to supply the constructor."
  {:added "1.0"}
  [loc node children]
    ((:make-node loc) node children))

(defn path
  "Returns a seq of nodes leading to this loc"
  {:added "1.0"}
  [loc]
    (:pnodes loc))

(defn lefts
  "Returns a seq of the left siblings of this loc"
  {:added "1.0"}
  [loc]
    (seq (:l loc)))

(defn rights
  "Returns a seq of the right siblings of this loc"
  {:added "1.0"}
  [loc]
    (:r loc))


(defn down
  "Returns the loc of the leftmost child of the node at this loc, or
  nil if no children"
  {:added "1.0"}
  [loc]
    (when (branch? loc)
      (let [{:keys [node pnodes]} loc
            [c & cnext :as cs] (children loc)]
        (when cs
          (merge loc {:node c
                      :l [] 
                      :pnodes (if pnodes (conj pnodes node) [node]) 
                      :ppath loc 
                      :r cnext})))))

(defn up
  "Returns the loc of the parent of the node at this loc, or nil if at
  the top"
  {:added "1.0"}
  [loc]
  (let [{node :node
         l :l
         ppath :ppath
         pnodes :pnodes
         r :r
         changed? :changed?,
         :as path} loc]
      (when pnodes
        (let [pnode (peek pnodes)]
          (if changed?
            (merge loc
                   {:node (make-node loc pnode (concat l (cons node r)))
                    :ppath (and ppath (assoc ppath :changed? true))})
            (assoc  ppath :ctx (:ctx loc)))))))

(defn root
  "zips all the way up and returns the root node, reflecting any
 changes."
  {:added "1.0"}
  [loc]
    (if (= :end? loc)
      (node loc)
      (let [p (up loc)]
        (if p
          (recur p)
          (node loc)))))

(defn right
  "Returns the loc of the right sibling of the node at this loc, or nil"
  {:added "1.0"}
  [loc]
    (let [{node :node l :l  [r & rnext :as rs] :r ppath :ppath} loc]
      (when (and ppath rs)
        (merge loc {:node r :l (conj l node) :r rnext}))))

;; TO-DO
(defn rightmost
  "Returns the loc of the rightmost sibling of the node at this loc, or self"
  {:added "1.0"}
  [loc]
    (let [[node {l :l r :r :as path}] loc]
      (if (and path r)
        (with-meta [(last r) (assoc path :l (apply conj l node (butlast r)) :r nil)] (meta loc))
        loc)))

(defn left
  "Returns the loc of the left sibling of the node at this loc, or nil"
  {:added "1.0"}
  [loc]
    (let [{node :node l :l r :r} loc]
      (when (and path (seq l))
        (merge loc {:node (peek l)
                    :l (pop l)
                    :r (cons node r)}))))

;; To-DO
(defn leftmost
  "Returns the loc of the leftmost sibling of the node at this loc, or self"
  {:added "1.0"}
  [loc]
    (let [[node {l :l r :r :as path}] loc]
      (if (and path (seq l))
        (with-meta [(first l) (assoc path :l [] :r (concat (rest l) [node] r))] (meta loc))
        loc)))

;; To-Do
(defn insert-left
  "Inserts the item as the left sibling of the node at this loc,
 without moving"
  {:added "1.0"}
  [loc item]
    (let [[node {l :l :as path}] loc]
      (if (nil? path)
        (throw "Insert at top")
        (with-meta [node (assoc path :l (conj l item) :changed? true)] (meta loc)))))

;; To-Do
(defn insert-right
  "Inserts the item as the right sibling of the node at this loc,
  without moving"
  {:added "1.0"}
  [loc item]
    (let [[node {r :r :as path}] loc]
      (if (nil? path)
        (throw "Insert at top")
        (with-meta [node (assoc path :r (cons item r) :changed? true)] (meta loc)))))

(defn replace
  "Replaces the node at this loc, without moving"
  {:added "1.0"}
  [loc node]
  (assoc loc
         :node node
         :changed? true))

(defn edit
  "Replaces the node at this loc with the value of (f node args)"
  {:added "1.0"}
  [loc f & args]
  (replace loc (apply f (node loc) args)))

(defn insert-child
  "Inserts the item as the leftmost child of the node at this loc,
  without moving"
  {:added "1.0"}
  [loc item]
  (replace loc (make-node loc (node loc) (cons item (children loc)))))

(defn append-child
  "Inserts the item as the rightmost child of the node at this loc,
  without moving"
  {:added "1.0"}
  [loc item]
  (replace loc (make-node loc (node loc) (concat (children loc) [item]))))


(defn end?
  "Returns true if loc represents the end of a depth-first walk"
  {:added "1.0"}
  [loc]
  (= :end? loc))

(defn next
  "Moves to the next loc in the hierarchy, depth-first. When reaching
  the end, returns a distinguished loc detectable via end?. If already
  at the end, stays there."
  {:added "1.0"}
  [loc]
    (if (end? loc)
      loc
      (or 
       (and (branch? loc) (down loc))
       (right loc)
       (loop [p loc]
         (if (up p)
           (or (right (up p)) (recur (up p)))
           (assoc p :end? true))))))

;; To-Do (fix rightmost)
(defn prev
  "Moves to the previous loc in the hierarchy, depth-first. If already
  at the root, returns nil."
  {:added "1.0"}
  [loc]
    (if-let [lloc (left loc)]
      (loop [loc lloc]
        (if-let [child (and (branch? loc) (down loc))]
          (recur (rightmost child)) 
          loc))
      (up loc)))


;; To Debug
(defn remove
  "Removes the node at loc, returning the loc that would have preceded
  it in a depth-first walk."
  {:added "1.0"}
  [loc]
    (let [{node :node l :l, ppath :ppath, pnodes :pnodes, rs :r} loc]
      (if (nil? loc)
        
        (throw  "Remove at top")
        
        (if (pos? (count l))
          
          (loop [loc (merge loc {:node  (peek l) :l (pop l) :changed? true})]
            
            (if-let [child (and (branch? loc) (down loc))]
              (recur (rightmost child))
              loc))
          
          (merge loc
                 
                 (and ppath (assoc ppath :changed? true))
                 {:node (make-node loc (peek pnodes) rs)})))))




;;#########################################################
;; Specific Zippers
;;#########################################################

(defn seq-zip
  "Returns a zipper for nested sequences, given a root sequence"
  {:added "1.0"}
  [root]
    (zipper seq?
            identity
            (fn [node children] (with-meta children (meta node)))
            root
            nil))

(defn vector-zip
  "Returns a zipper for nested vectors, given a root vector"
  {:added "1.0"}
  [root]
    (zipper vector?
            seq
            (fn [node children] (with-meta (vec children) (meta node)))
            root
            nil))

(defn xml-zip
  "Returns a zipper for xml elements (as from xml/parse),
  given a root element"
  {:added "1.0"}
  [root]
    (zipper (complement string?) 
            (comp seq :content)
            (fn [node children]
              (assoc node :content (and children (apply vector children))))
            root
            nil))



