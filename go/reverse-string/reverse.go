package reverse

func String(input string) string {
	n := len(input)
	runes := make([]rune, n)
	for i, r := range input {
		runes[i] = r
	}
	for i := 0; i < n/2; i++ {
		temp := runes[i]
		runes[i] = runes[n-i-1]
		runes[n-i-1] = temp
	}
	return string(runes)
}
