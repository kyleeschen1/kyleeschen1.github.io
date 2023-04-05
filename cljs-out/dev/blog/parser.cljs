
(ns ^:figwheel-hooks blog.parser)

;;################################################################
;; Parsing
;;################################################################


(def opening?
  #{"(" "{" "[" "#{"})

(def closing?
  #{")" "]" "}"})

(def reg
  #"(\n|\(|\[|\{|\]|\)|\}|[\w|\:|\-|\+|\>|\<|\=|\!|\?|\;|\&|\\|\.|\/]+)")

(defn tag?
  [[_ fst]]
  (= "tag" (:form fst)))

(defn tag->edn
  [form]
  (letfn [(to-string [form]
            (if (= :branch (:tag form))
              (map to-string (:nodes form))
              (str " " (:form form))))]

    (->> form
         (to-string)
         (flatten)
         (apply str)
         (cljs.tools.reader.edn/read-string))))


;;################################################################
;; Parsing
;;################################################################

(defn process-tag
  
  [[_ _ tag body] parent-h parent-w]

  (let [
        
        {body-h :height body-w :width} body

        dy (- body-h parent-h)
        dx (inc (- body-w parent-w))]

    (assoc body
           :tags (tag->edn tag)
           :tx (+ (:tx body) dx)
           :ty (+ (:ty body) dy)
           :dx dx
           :dy dy)))



(defn process-branch
  
  [form depth nl?]
  
  (let [[op cl] [(first form) (last form)]
        
        h (inc (- (:y cl) (:y op)))
        w (- (inc (:x cl)) (:x op))]

    (if (tag? form)
      
      (process-tag form h w)

      {:tag :branch
       :height h
       :width w
       :depth depth
       :nodes form
       :tx 0
       :ty 0
       :newline? nl?})))

(defn process-token
  
  [form width x y depth nl?]
  
  {:tag :token
 
   :form form
   :text form
   :width width
   :height 1
   :depth depth
   :x x
   :y y
   :tx x
   :ty y
   :newline? nl?})

(defn process-delimiter
  
  [form width x y depth nl?]
  
  (assoc (process-token form width x y depth nl?)
         :tag :delimiter))

(def narrow?
  #{"t" "l" "f" "i" "I" "s" "\\'"})

(defn token->width
  
  "Computes width for a token.

   This is a temporary fix, mainly
   to address the variable character
   width of Garamond."
  
  [s]
  
  (reduce (fn [sum char]
            (let [w  (if (narrow? char)
                       0.4
                       1)]
              (+ sum w)))
          0
          s))

(defn parser

  "Inefficient but passable.

   Parses string to tree annotated with:

   - x position
   - y position
   - depth
   - width
   - height"
  
  [string]

  (let [string (clojure.string/split string reg)]
    
    (loop [[s & ss :as string] string
           stack []
           processed []
           x 0
           y 0
           depth 0
           nl? false]

      (if-not string

        
        (process-branch processed depth nl?)

        (cond

          (= s "")
          (recur ss stack processed x y depth nl?)

          (= s "\n")
          (recur ss stack processed 0 (inc y) depth true)

          :else

          (let [width (token->width s)]
            
            (if-let [op (opening? s)]
              
              (recur ss
                     (conj stack processed)
                     [(process-delimiter op width x y depth nl?)]
                     (+ x width)
                     y
                     (inc depth)
                     false)
              
              (if-let [cl (closing? s)]

                (let [cl (process-delimiter cl width x y depth nl?)
                      processed (conj processed cl)
                      processed (process-branch processed depth nl?)

                      [x y] (let [{:keys [dx dy]} processed]
                              [(+ dx x) (+ dy y)])
                      
                      up (peek stack)
                      stack (pop stack)

                      processed (conj up processed)]
                  
                  (recur ss
                         stack
                         processed
                         (+ x width)
                         y
                         (dec depth)
                         false))

                (let [[processed nl?] (if (clojure.string/blank? s)
                                        [processed nl?] ;; Don't add whitespace
                                        [(conj processed (process-token s width x y depth nl?)) false])]
                  (recur ss
                         stack
                         processed
                         (+ x width)
                         y
                         depth
                         nl?))))))))))
