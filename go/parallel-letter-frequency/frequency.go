package letter

type FreqMap map[rune]int

func Frequency(s string) FreqMap {
	m := FreqMap{}
	for _, r := range s {
		m[r]++
	}
	return m
}

func FrequencyChannel(s string, c chan FreqMap) {
	c <- Frequency(s)
}

func ConcurrentFrequency(strings []string) FreqMap {
	c := make(chan FreqMap, len(strings))
	for _, s := range strings {
		FrequencyChannel(s, c)
	}
	result := FreqMap{}
	for range strings {
		freqResult := <-c
		for r, count := range freqResult {
			result[r] += count
		}
	}
	return result
}
