package isogram

import (
	"strings"
	"unicode"
)

func IsIsogram(input string) bool {
	letters := make(map[rune]int)
	for _, letter := range strings.ToLower(input) {
		if !unicode.IsLetter(letter) {
			continue
		}
		if letters[letter] == 1 {
			return false
		}
		letters[letter] = 1
	}
	return true
}
