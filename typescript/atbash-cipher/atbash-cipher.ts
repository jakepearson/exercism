export default class AtbashCipher {
  letterOffset = "a".charCodeAt(0)
  numberOffset = "0".charCodeAt(0)

  private isLetter(letter: string): boolean {
    const charCode = letter.charCodeAt(0)
    return charCode >= this.letterOffset && charCode < this.letterOffset + 26
  }

  private isNumber(letter: string): boolean {
    const charCode = letter.charCodeAt(0)
    return charCode >= this.numberOffset && charCode < this.numberOffset + 10
  }

  private transpose(letter: string): string {
    const letterCode = letter.charCodeAt(0) - this.letterOffset
    const transposeCode = 26 - letterCode - 1
    const result = String.fromCharCode(transposeCode + this.letterOffset)
    return result
  }

  private swap(input: string) {
    input = input.toLowerCase()
    let result = ""
    for (const letter of input) {
      if (this.isLetter(letter)) {
        result += this.transpose(letter)
      } else if (this.isNumber(letter)) {
        result += letter
      }
    }
    return result
  }

  encode(input: string): string {
    const encoded = this.swap(input)
    let result = ""
    for (let i = 0; i < encoded.length; i++) {
      if (i % 5 === 0 && i < encoded.length - 1 && i > 2) {
        result += " "
      }
      result += encoded[i]
    }

    return result
  }

  decode(input: string): string {
    return this.swap(input)
  }
}