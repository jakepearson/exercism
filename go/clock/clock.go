package clock

import (
	"fmt"
)

type Clock struct {
	minutes int
}

const MINUTES_PER_DAY = 24 * 60

func New(hour int, minute int) Clock {
	newMinute := hour*60 + minute
	for newMinute < 0 {
		newMinute += MINUTES_PER_DAY
	}
	newMinute = newMinute % MINUTES_PER_DAY
	return Clock{newMinute}
}

func (clock Clock) String() string {
	return fmt.Sprintf("%02d:%02d", (clock.minutes/60)%24, clock.minutes%60)
}

func (clock Clock) Add(minutes int) Clock {
	return New(0, clock.minutes+minutes)
}
