package luhn

// Source: exercism/problem-specifications
// Commit: c826372 luhn: Make canonical-data.json compliant
// Problem Specifications Version: 1.0.0

var testCases = []struct {
	description string
	input       string
	ok          bool
}{
	{
		"single digit strings can not be valid",
		"1",
		false,
	},
	{
		"A single zero is invalid",
		"0",
		false,
	},
	{
		"a simple valid SIN that remains valid if reversed",
		"059",
		true,
	},
	{
		"a simple valid SIN that becomes invalid if reversed",
		"59",
		false,
	},
	{
		"a valid Canadian SIN",
		"055 444 285",
		true,
	},
	{
		"invalid Canadian SIN",
		"055 444 286",
		false,
	},
	{
		"invalid credit card",
		"8273 1232 7352 0569",
		false,
	},
	{
		"valid strings with a non-digit included become invalid",
		"055a 444 285",
		false,
	},
	{
		"valid strings with punctuation included become invalid",
		"055-444-285",
		false,
	},
	{
		"valid strings with symbols included become invalid",
		"055£ 444$ 285",
		false,
	},
	{
		"single zero with space is invalid",
		" 0",
		false,
	},
	{
		"more than a single zero is valid",
		"0000 0",
		true,
	},
	{
		"input digit 9 is correctly converted to output digit 9",
		"091",
		true,
	},
}
