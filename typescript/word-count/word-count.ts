export default class Words {
  count(input: string): Map<string, number> {
    const result = new Map<string, number>()
    input.toLowerCase().split(/ |\n|\t/).forEach((word) => {
      if (word.length > 0) {
        const value = result.get(word) || 0
        result.set(word, value + 1)
      }
    })
    return result
  }
}