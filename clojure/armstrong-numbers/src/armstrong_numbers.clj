(ns armstrong-numbers)

(defn ->number [c]
  (Integer/parseInt (str c)))

(defn armstrong? [num]
  (let [power  (-> num str count)
        result (reduce (fn [result current]
                         (+ result (-> current str (BigInteger.) (.pow power))))
                       (BigInteger. "0")
                       (-> num str))]
    (= (-> num str bigint) result)))
