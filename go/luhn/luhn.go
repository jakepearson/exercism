package luhn

import "strconv"
import "fmt"
import "strings"
import "regexp"

func Valid(input string) bool {
	input = strings.Replace(input, " ", "", -1)
	if len(input) < 2 {
		return false
	}
	matcher := regexp.MustCompile(`\D`)
	if matcher.FindStringIndex(input) != nil {
		return false
	}
	fmt.Printf("Begin: %s\n", input)

	sum := 0
	for i, letter := range input {
		digit, _ := strconv.Atoi(string(letter))
		if i%2 == 1 {
			digit *= 2
			if digit > 9 {
				digit -= 9
			}
		}
		fmt.Printf("%s: %d\n", string(letter), digit)
		sum += digit
	}

	return sum%10 == 0
}
