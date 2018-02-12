export default function transform(input: { [key: string]: string[] }): { [key: string]: number } {
  const result: { [key: string]: number } = {}
  for (const score of Object.keys(input)) {
    const scoreNumber = parseInt(score, 10)
    for (const letter of input[score]) {
      result[letter.toLowerCase()] = scoreNumber
    }
  }
  return result
}