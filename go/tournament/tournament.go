package tournament

import (
	"bytes"
	"fmt"
	"io"
	"strings"
)

type Team struct {
	Name   string
	Count  int
	Win    int
	Draw   int
	Loss   int
	Points int
}

func (t Team) String() string {
	return fmt.Sprintf("%s|%d|%d|%d|%d|%d")
}

func getTeam(teams map[string]*Team, name string) *Team {
	if teams[name] == nil {
		team := Team{}
		team.Name = name
		teams[name] = &team
	}
	return teams[name]
}

func updateTeams(teams map[string]*Team, name1 string, name2 string, result string) {
	team1 := getTeam(teams, name1)
	team2 := getTeam(teams, name2)
	team1.Count++
	team2.Count++
	switch result {
	case "win":
		team1.Points += 3
		team1.Win++
		team1.Loss++
	case "lose":
		team2.Points += 3
		team1.Loss++
		team2.Win++
	case "draw":
		team1.Points++
		team2.Points++
		team1.Draw++
		team2.Draw++
	}
}

func parse(reader io.Reader) map[string]*Team {
	teams := map[string]*Team{}
	buffer := new(bytes.Buffer)
	buffer.ReadFrom(reader)
	input := strings.Trim(buffer.String(), "\n")
	fmt.Printf("Input: %s\n", input)
	for _, line := range strings.Split(input, "\n") {
		parts := strings.Split(line, ";")
		fmt.Printf("Parts: %v\n", line)
		updateTeams(teams, parts[0], parts[1], parts[2])
	}
	return teams
}

func Tally(reader io.Reader, writer io.Writer) error {
	teams := parse(reader)
	output := new(bytes.Buffer)

	for _, team := range teams {
		output.WriteString(fmt.Sprintf("%s\n", team))
	}

	writer.Write(output.Bytes())
	return nil
}
