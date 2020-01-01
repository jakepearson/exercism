(ns bob
  (:require [clojure.string :as string]))

(defn- yelling? [input]
  (and (every? (fn [l] (= (-> l str)
                          (-> l str string/upper-case)))
               input)
       (not (= (string/upper-case input) input))))

(defn response-for [input]
  (cond
    (string/ends-with? input "?")
    "Sure."

    (and (yelling? input)
         (string/ends-with? input "?"))
    "Calm down, I know what I'm doing!"

    (= (string/trim input) "")
    "Fine. Be that way!"

    (or (string/ends-with? input "!")
        (yelling? input))
    "Whoa, chill out!"

    :else
    "Whatever."))
