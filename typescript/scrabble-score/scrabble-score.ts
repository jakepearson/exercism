const scoreText = `A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10`

function parseScores(text: string): Map<string, number> {
  const result = new Map<string, number>()
  text.toLowerCase().split('\n').forEach((line) => {
    const parts = line.split(' ')
    const score = parseInt(parts[parts.length - 1], 10)
    parts.pop()
    parts.filter((p) => p.length > 0).forEach((p) => {
      result.set(p[0], score)
    })
  })
  return result
}

const scores = parseScores(scoreText)

export default function score(input: string): number {
  // let result = 0
  // for (const letter of input.toLowerCase().split('')) {
  //   result += scores.get(letter) || 0
  // }
  // return result
  return input.toLowerCase().split('').reduce<number>((accumulator, l) => accumulator + (scores.get(l) || 0), 0)
}