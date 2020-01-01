(ns word-count
  (:require [clojure.string :as string]))

(defn counter [[key value]]
  [key (count value)])

(defn word-count [input]
  (let [words (-> input
                  string/lower-case
                  (string/replace #":|,|!|&|@|\$|%|\^|&|\"" "")
                  (string/split #"\s+"))]
    (->> words
         (group-by identity)
         (map counter)
         (into {}))))
