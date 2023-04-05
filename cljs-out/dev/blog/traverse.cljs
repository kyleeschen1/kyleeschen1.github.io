
(ns ^:figwheel-hooks blog.traverse
  (:require [com.rpl.specter :as s]))

;;##################################################################
;; Traverse
;;#################################################################
;;
;; Allows for stateful walking of arbitrarily nested structures.
;;
;; Inspired by Alex Miller's implementation of the visitor pattern.


(declare traverse*
         traverse-branch
         compile-traversal
         process)


(defn traverse

  "Walks a nested structure, applying inner and
   outer functions.

   Like a zipper, one must provide a branch?, children,
   and make-node function.

   Unlike a zipper, this allows:

   1. The application of an inner and outer function,
      which are difficult with the zipper 'next' function
      because of ambiguity over whether branch nodes have
      already been visted.

   2. A transfer of state between nodes, which facilitates
      accumulation, globally and locally scoped data, counters,
      interpreters, etc.

   To Add:

   - A filter function that prevents navigation into the node.
   - Ability to stop the entire computation and retrieve continuation.
   - The ability to re-run a node after a function has been applied."

  [state branch? children make-node pre-f post-f]

  (let [pre-f (compile-traversal pre-f)
        post-f (compile-traversal post-f)]
    
    (traverse* state
               branch?
               children
               make-node
               pre-f
               post-f
               identity)))

;;----------------------------------------------
;; Traversal Helpers
;;----------------------------------------------

(defn traverse*
  
  [state branch? children make-node pre-f post-f k]

  (if-not (branch? (:node state))

    (k (post-f (pre-f state)))

    (let [state (process state (pre-f state))
          node (:node state)]
      
      (if (:skip? state)

        (let [state (dissoc state :skip?)]

          (k (process state (post-f state))))

        (traverse-branch state
                         branch?
                         children
                         make-node
                         pre-f
                         post-f
                         k)))))


(defn traverse-branch
  
  [{:keys [node] :as state} branch? children make-node pre-f post-f k]
  
  (letfn [(traverse-child [node]
            (fn [k]
              (fn [state acc changed?]
                (traverse* (assoc state :node node)
                           branch?
                           children
                           make-node
                           pre-f
                           post-f
                           (fn [result]
                             (let [node* (:node result)
                                   changed? (or changed?
                                                (not= node node*))]
                               (k result (conj acc node*) changed?)))))))

          (rebuild-node [state acc changed?]
            
            (let [node* (if changed?
                          (make-node node acc)
                          node)
                  state (s/setval [:node] node* state)]
              
              (k (post-f state))))

          (thread-traversals [node]
            (->> (children node)
                 (reverse)
                 (map traverse-child)
                 (reduce (fn [next-t t]
                           (t next-t))
                         rebuild-node)))]

    ((thread-traversals node) state [] false)))


(defn process
  [prev-state new-state]
  (merge prev-state new-state))


;;##################################################################
;; Traversal Compilation
;;#################################################################

(defn compile-traversal

  "Takes a tree of traversal or vectors of traversal
   functions and composes them into one function that:
  
   1. Takes in a state.
  
   2. Runs each function of the the tree in
      a depth-first order.
  
   3. Performs state updates between each
      function call."
  
  [f]
  
  (if (vector? f)
    
    (->> (reverse f)
         
         (map (fn [f]
                (let [f* (compile-traversal f)]
                  (fn [next-f]
                    (fn [state]
                      (next-f (f* state)))))))
         
         (reduce (fn [next-f f]
                   (f next-f))
                 identity))
    
    (fn [state]
      (process state (f state)))))









