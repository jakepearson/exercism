package reverse

import (
	"testing"

	"github.com/magiconair/properties/assert"
)

func TestReverse(t *testing.T) {
	for _, testCase := range testCases {
		if res := String(testCase.input); res != testCase.expected {
			t.Fatalf("FAIL: %s(%s)\nExpected: %q\nActual: %q",
				testCase.description, testCase.input, testCase.expected, res)
		}
		t.Logf("PASS: %s", testCase.description)
	}
}

func TestSimple(t *testing.T) {
	assert.Equal(t, "tobor", String("robot"))
}

// func TestReverseOfReverse(t *testing.T) {
// 	assertion := func(s string) bool {
// 		return s == String(String(s))
// 	}
// 	if err := quick.Check(assertion, nil); err != nil {
// 		t.Fatal(err)
// 	}
// }

func BenchmarkReverse(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, test := range testCases {
			String(test.input)
		}
	}
}
