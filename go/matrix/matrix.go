package matrix

import (
	"errors"
	"strconv"
	"strings"
)

type Matrix struct {
	rows [][]int
	cols [][]int
}

func New(input string) (*Matrix, error) {
	rows, e := initRows(input)
	if e != nil {
		return nil, e
	}
	cols := rowsToCols(rows)
	return &Matrix{rows, cols}, nil
}

func initRows(input string) ([][]int, error) {
	lines := strings.Split(input, "\n")
	rows := make([][]int, len(lines))
	validator := 0
	for i, line := range lines {
		line = strings.Trim(line, " ")
		parts := strings.Split(line, " ")
		if i != 0 && len(parts) != validator {
			return nil, errors.New("Not a rectangular matrix")
		}
		validator = len(parts)
		rows[i] = make([]int, len(parts))
		for j, part := range parts {
			var e error
			rows[i][j], e = strconv.Atoi(part)
			if e != nil {
				return nil, e
			}
		}
	}

	return rows, nil
}

func rowsToCols(rows [][]int) [][]int {
	if len(rows) == 0 {
		return nil
	}
	cols := make([][]int, len(rows[0]))
	for i, _ := range rows[0] {
		cols[i] = make([]int, len(rows))
		for j, _ := range rows {
			cols[i][j] = rows[j][i]
		}
	}
	return cols
}

func (m Matrix) Rows() [][]int {
	return m.rows
}

func (m Matrix) Cols() [][]int {
	return m.cols
}

func (m Matrix) Set(row int, col int, value int) bool {
	if row >= len(m.rows) || col >= len(m.cols) {
		return false
	}
	if row < 0 || col < 0 {
		return false
	}

	m.rows[row][col] = value
	m.cols[col][row] = value
	return true
}
