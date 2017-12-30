package twelve

import (
	"fmt"
)

var numbers = [...]string{
	"first",
	"second",
	"third",
	"fourth",
	"fifth",
	"sixth",
	"seventh",
	"eighth",
	"ninth",
	"tenth",
	"eleventh",
	"twelth",
}

var parts = [...]string{
	"twelve Drummers Drumming",
	"eleven Pipers Piping",
	"ten Lords-a-Leaping",
	"nine Ladies Dancing",
	"eight Maids-a-Milking",
	"seven Swans-a-Swimming",
	"six Geese-a-Laying",
	"five Gold Rings",
	"four Calling Birds",
	"three French Hens",
	"two Turtle Doves",
	"a Partridge in a Pear Tree.",
}

func Verse(input int) string {
	fmt.Printf("Verse: %d\n", input)
	result := fmt.Sprintf("On the %s day of Christmas my true love gave to me,", numbers[len(numbers)-input])
	for i := input; i < len(parts); i++ {
		result += fmt.Sprintf(", %s", parts[i])
	}
	result += fmt.Sprintf(" and %s", parts[11])
	return result
}

func Song() string {
	result := ""
	for i := 12; i > 0; i++ {
		result += fmt.Sprintf("%s\n\n", Verse(i))
	}
	return result
}
