package grains

import "errors"

func Total() uint64 {
	result := uint64(0)
	return ^result
}

func Square(cells int) (uint64, error) {
	if cells > 64 || cells < 1 {
		return uint64(0), errors.New("Bad times")
	}

	result := uint64(1) << uint(cells-1)

	return result, nil
}
