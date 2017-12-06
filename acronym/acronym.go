package acronym

import (
	"strings"
	"unicode/utf8"
)

func Splitter(s string, splits string) []string {
	m := make(map[rune]int)
	for _, r := range splits {
		m[r] = 1
	}

	splitter := func(r rune) bool {
		return m[r] == 1
	}

	return strings.FieldsFunc(s, splitter)
}

func Abbreviate(s string) string {
	result := ""
	for _, word := range Splitter(s, " -") {
		first, _ := utf8.DecodeRuneInString(word)
		result += strings.ToUpper(string(first))
	}
	return result
}
