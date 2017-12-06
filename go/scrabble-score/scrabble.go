package scrabble

import (
	"regexp"
	"strconv"
	"strings"
	"unicode/utf8"
)

var letters = `A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10`

var lookup = map[rune]int{}

func init() {
	matcher := regexp.MustCompile("\\w+")
	lines := strings.Split(letters, "\n")
	for _, line := range lines {
		parts := matcher.FindAllString(line, -1)
		lastPartIndex := len(parts) - 1
		score, _ := strconv.Atoi(parts[lastPartIndex])
		for _, part := range parts[:lastPartIndex] {
			r, _ := utf8.DecodeRuneInString(part)
			lookup[r] = score
		}
	}
}

func Score(input string) int {
	result := 0
	for _, letter := range strings.ToUpper(input) {
		result += lookup[letter]
	}
	return result
}
