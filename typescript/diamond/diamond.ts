export default class Diamond {
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  private createLine(letterOffset: number, center: number): string {
    const letter = this.letters[letterOffset]
    if (letterOffset === 0) {
      const outside = " ".repeat(center)
      return outside + letter + outside + "\n"
    } else {
      const outside = " ".repeat(center - letterOffset)
      const inside = " ".repeat(letterOffset * 2 - 1)
      return outside + letter + inside + letter + outside + "\n"
    }
  }

  makeDiamond(letter: string): string {
    letter = letter.toUpperCase()
    const index = this.letters.indexOf(letter)
    let result = ""
    for (let i = 0; i < index; i++) {
      result += this.createLine(i, index)
    }
    for (let i = index; i >= 0; i--) {
      result += this.createLine(i, index)
    }
    return result
  }
}