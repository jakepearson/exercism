package acronym

import (
	"testing"
)

func TestAcronym(t *testing.T) {
	for _, test := range stringTestCases {
		actual := Abbreviate(test.input)
		if actual != test.expected {
			t.Errorf("Acronym test [%s], expected [%s], actual [%s]", test.input, test.expected, actual)
		}
	}
}

func TestSplitter(t *testing.T) {
	words := Splitter("orange apple-banana", " -")
	if len(words) != 3 {
		t.Error("Bad times")
	}
}
