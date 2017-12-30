package matrix

import (
	"errors"
	"fmt"
	"strconv"
	"strings"
)

type Matrix struct {
	input string
	rows  [][]int
	cols  [][]int
}

func New(input string) (*Matrix, error) {
	matrix := Matrix{input: input}
	e := matrix.initRows()
	if e != nil {
		return nil, e
	}
	fmt.Printf("After init: %v\n", matrix.Rows())
	matrix.initCols()
	return &matrix, nil
}

func (m *Matrix) initRows() error {
	lines := strings.Split(m.input, "\n")
	m.rows = make([][]int, len(lines))
	validator := 0
	for i, line := range lines {
		line = strings.Trim(line, " ")
		parts := strings.Split(line, " ")
		if i != 0 && len(parts) != validator {
			return errors.New("Not a rectangular matrix")
		}
		validator = len(parts)
		m.rows[i] = make([]int, len(parts))
		for j, part := range parts {
			var e error
			m.rows[i][j], e = strconv.Atoi(part)
			if e != nil {
				return e
			}
		}
	}
	fmt.Printf("Part: %v\n", m.rows)

	return nil
}

func (m *Matrix) initCols() {
	if len(m.rows) == 0 {
		return
	}
	m.cols = make([][]int, len(m.rows[0]))
	for i, _ := range m.rows[0] {
		m.cols[i] = make([]int, len(m.rows))
		for j, _ := range m.rows {
			m.cols[i][j] = m.rows[j][i]
		}
	}
}

func (m Matrix) Rows() [][]int {
	return m.rows
}

func (m Matrix) Cols() [][]int {
	return m.cols
}

func (m Matrix) Set(row int, col int, value int) bool {
	m.Rows()[row][col] = value
	m.Cols()[col][row] = value
	return true
}
