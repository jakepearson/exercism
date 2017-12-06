package bob

import "strings"
import "unicode/utf8"

func isYelling(remark string) bool {
	upper := strings.ToUpper(remark)
	return upper == remark && strings.ContainsAny(upper, "ABCDEFGHUJKLOMNOPQRSTUVWXYZ")
}

func isQuestion(remark string) bool {
	last, _ := utf8.DecodeLastRuneInString(remark)
	return last == '?'
}

func isSilence(remark string) bool {
	return remark == ""
}

func Hey(remark string) string {
	remark = strings.Trim(remark, " \t\r\n")
	if isYelling(remark) {
		return "Whoa, chill out!"
	}
	if isQuestion(remark) {
		return "Sure."
	}
	if isSilence(remark) {
		return "Fine. Be that way!"
	}
	return "Whatever."
}
