package gigasecond

import "time"

func AddGigasecond(t time.Time) time.Time {
	billion := time.Duration(1000*1000*1000) * time.Second
	return t.Add(billion)
}
