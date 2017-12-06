package robotname

import "fmt"

type Robot struct {
	name string
}

func (r *Robot) Name() string {
	if r.name == "" {
		r.Reset()
	}
	return r.name
}

var counter = 1
var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

func (r *Robot) Reset() {
	counter++
	nextID := counter
	numbers := nextID % 1000
	middle := (nextID/1000)%26 + 1
	left := (nextID/1000/26)%26 + 1
	r.name = fmt.Sprintf("%v%v%03d", string(letters[left]), string(letters[middle]), numbers)
}
