package tree

import (
	"errors"
	"sort"
)

type Record struct {
	ID, Parent int
}

type Node struct {
	ID       int
	Children []*Node
}

func Build(records []Record) (*Node, error) {
	if len(records) == 0 {
		return nil, nil
	}

	sort.Slice(records, func(i, j int) bool {
		return records[i].ID < records[j].ID
	})
	if records[0].ID != 0 {
		return nil, errors.New("No Root Node")
	}

	nodes := make(map[int]*Node)
	for i, record := range records {
		newNode := Node{}
		newNode.ID = record.ID
		if nodes[record.Parent] != nil {
			parentNode := nodes[record.Parent]
			parentNode.Children = append(parentNode.Children, &newNode)
		}
		if record.Parent > record.ID {
			return nil, errors.New("Bad Parent")
		}
		if i > 0 && records[i-1].ID+1 != record.ID {
			return nil, errors.New("Non continuous ID")
		}
		nodes[newNode.ID] = &newNode
	}
	result := nodes[records[0].ID]
	return result, nil
}
