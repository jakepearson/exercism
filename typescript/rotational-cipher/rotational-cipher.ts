export default class RotationalCipher {
  private static letters = "abcdefghijklmnopqrstuvwxyz"

  static rotate(input: string, distance: number): string {
    let result = ""
    for (let letter of input) {
      const isUpper = letter.toUpperCase() === letter
      if (isUpper) {
        letter = letter.toLowerCase()
      }
      const letterIndex = letter.charCodeAt(0) - 97
      let nextLetter = this.letters[(letterIndex + distance) % 26]
      if (!nextLetter) {
        nextLetter = letter
      }
      if (isUpper) {
        nextLetter = nextLetter.toUpperCase()
      }
      result += nextLetter
    }
    return result
  }
}
