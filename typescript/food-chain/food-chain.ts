export default class FoodChain {
  static verse(n: number): string {
    return `I know an old lady who swallowed a fly.\nI don't know why she swallowed the fly. Perhaps she'll die.`
  }

  static verses(start: number, end: number): string {
    return this.verse(start) + "\n" + this.verse(end)
  }
}