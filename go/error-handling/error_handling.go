package erratum

import (
	"fmt"
)

func Use(f func() (Resource, error), value string) (result error) {
	fmt.Printf("Starting USE\n")
	var r Resource

	for {
		var e error
		var tryAgain bool
		r, e = f()

		if e != nil {
			_, tryAgain = e.(TransientError)
			if !tryAgain {
				return e
			}
		} else {
			break
		}
	}

	defer func() {
		if rec := recover(); rec != nil {
			switch recoveryError := rec.(type) {
			case FrobError:
				r.Defrob(recoveryError.defrobTag)
				result = recoveryError
			case error:
				result = recoveryError
			}
		}
		r.Close()
	}()

	r.Frob(value)
	return result
}
