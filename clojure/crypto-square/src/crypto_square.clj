(ns crypto-square
  (:require [clojure.string :as string]))

(defn- transpose [strings]
  (apply map list strings))

(defn normalize-plaintext [text]
  (->> text
       (re-seq #"[0-9a-zA-Z]")
       string/join
       string/lower-case))

(defn square-size [text]
  (-> text
      normalize-plaintext
      count
      Math/sqrt
      Math/ceil
      int))

(defn plaintext-segments [text]
  (let [size (square-size text)]
    (->> text
         normalize-plaintext
         (partition-all size)
         (mapv string/join))))

(defn padding-right [s width pad]
  (apply str (take width (concat s (repeat pad)))))

(defn ciphertext-list [text]
  (let [size (square-size text)]
    (->> text
         plaintext-segments
         (mapv (fn [s] (padding-right s size "$")))
         transpose
         (mapv string/join)
         (mapv (fn [s] (string/replace s "$" ""))))))

(defn ciphertext [text]
  (->> text
       ciphertext-list
       string/join))

(defn normalize-ciphertext [text]
  (->> text
       ciphertext-list
       (string/join " ")))
