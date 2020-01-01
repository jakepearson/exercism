package sublist

<<<<<<< HEAD
type Relation string

func Sublist(x []int, y []int) Relation {

	return "Sad!"
=======
import (
	"fmt"
)

type Relation string

const (
	equal     Relation = "equal"
	unequal   Relation = "unequal"
	superlist Relation = "superlist"
	sublist   Relation = "sublist"
)

func Sublist(x []int, y []int) Relation {
	if len(x) == 0 && len(y) == 0 {
		return equal
	}

	if len(x) == 0 {
		return sublist
	}

	if len(y) == 0 {
		return superlist
	}

	startMatch := -1
	endMatch := -1
	for i := 0; i < len(x); i++ {
		for j := i; j < len(y); j++ {
			if x[i] == y[j] {
				if startMatch == -1 {
					startMatch = i
				}
				endMatch = i
			}
		}
	}
	fmt.Printf("%v %v %d %d\n", x, y, startMatch, endMatch)
	if startMatch == 0 && endMatch == len(x)-1 {
		if len(x) == len(y) {
			return equal
		}
		if len(x) < len(y) {
			return sublist
		}
		return superlist
	}
	if endMatch-startMatch > 1 {
		return sublist
	}
	return unequal
>>>>>>> Clojure
}
