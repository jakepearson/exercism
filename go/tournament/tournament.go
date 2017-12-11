package tournament

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"sort"
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

func header() string {
	return "Team                           | MP |  W |  D |  L |  P\n"
}

func (t Team) String() string {
	return fmt.Sprintf("%-30s |%3d |%3d |%3d |%3d |%3d", t.Name, t.Count, t.Win, t.Draw, t.Loss, t.Points)
}

func getTeam(teams map[string]*Team, name string) *Team {
	if teams[name] == nil {
		team := Team{}
		team.Name = name
		teams[name] = &team
	}
	return teams[name]
}

func updateTeams(teams map[string]*Team, name1 string, name2 string, result string) error {
	team1 := getTeam(teams, name1)
	team2 := getTeam(teams, name2)
	team1.Count++
	team2.Count++
	switch result {
	case "win":
		team1.Points += 3
		team1.Win++
		team2.Loss++
	case "loss":
		team2.Points += 3
		team1.Loss++
		team2.Win++
	case "draw":
		team1.Points++
		team2.Points++
		team1.Draw++
		team2.Draw++
	default:
		return fmt.Errorf("Bad result name (%s)", result)
	}
	return nil
}

func toSlice(teams map[string]*Team) []*Team {
	var result []*Team
	for _, team := range teams {
		result = append(result, team)
	}
	sort.Slice(result, func(i, j int) bool {
		team1 := result[i]
		team2 := result[j]
		if team1.Points == team2.Points {
			return team1.Name < team2.Name
		}
		return team1.Points > team2.Points
	})
	return result
}

func parse(reader io.Reader) ([]*Team, error) {
	teams := map[string]*Team{}
	buffer := new(bytes.Buffer)
	buffer.ReadFrom(reader)
	input := strings.Trim(buffer.String(), "\n")
	lines := strings.Split(input, "\n")

	for _, line := range lines {
		if strings.HasPrefix(line, "# ") {
			continue
		}

		if len(strings.Trim(line, " \n")) == 0 {
			continue
		}

		parts := strings.Split(line, ";")
		if len(parts) < 3 {
			return nil, errors.New("Must have 2 semicolons per line")
		}
		error := updateTeams(teams, parts[0], parts[1], parts[2])
		if error != nil {
			return nil, error
		}
	}

	return toSlice(teams), nil
}

func Tally(reader io.Reader, writer io.Writer) error {
	teams, error := parse(reader)

	if error != nil {
		return error
	}

	output := new(bytes.Buffer)

	output.WriteString(header())
	for _, team := range teams {
		output.WriteString(fmt.Sprintf("%s\n", team))
	}

	writer.Write(output.Bytes())
	return nil
}
