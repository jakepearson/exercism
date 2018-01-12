package flatten

func flattenRecurse(input interface{}, c chan int) {
	switch t := input.(type) {
	case int:
		c <- t
	case []interface{}:
		for _, v := range t {
			flattenRecurse(v, c)
		}
	}
}

func flatten(input interface{}) chan int {
	c := make(chan int, 100)
	flattenRecurse(input, c)
	close(c)
	return c
}

func Flatten(input interface{}) []interface{} {
	var result []interface{}
	for v := range flatten(input) {
		result = append(result, v)
	}
	return result
}
