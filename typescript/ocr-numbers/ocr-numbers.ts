export default class OcrParser {
  static font = (' _     _  _     _  _  _  _  _ \n' +
    '| |  | _| _||_||_ |_   ||_||_|\n' +
    '|_|  ||_  _|  | _||_|  ||_| _|').split("\n")

  static readLetter(input: string[], rowOffset: number, columnOffset: number): string {
    for (let i = 0; i < 10; i++) {
      let matches = 0
      for (let j = 0; j < 3; j++) {
        const fontRow = this.font[j].substr(i * 3, 3)
        const inputRow = input[rowOffset + j].substr(columnOffset, 3)
        if (fontRow === inputRow) {
          matches++
        }
      }
      if (matches === 3) {
        return i.toString()
      }
    }
    return "?"
  }

  static readRow(input: string[], rowOffset: number): string {
    let result = ""
    for (let i = 0; i < input[rowOffset].length; i += 3) {
      result += this.readLetter(input, rowOffset, i)
    }
    return result
  }

  static convert(input: string): string {
    const lines = input.split("\n")
    const result: string[] = []
    for (let i = 0; i < lines.length; i += 4) {
      result.push(this.readRow(lines, i))
    }
    return result.join(",")
  }
}