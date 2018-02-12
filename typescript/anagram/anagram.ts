export default class Anagram {
  ordered: string
  constructor(input: string) {
    this.ordered = this.order(input)
  }

  matches(...options: string[]): string[] {
    return options.filter((word) => this.order(word) === this.ordered)
  }

  private order(input: string) {
    return input.toLowerCase().split('').sort().join('')
  }
}