export default class Acronym {
  static parse(phrase: string): string {
    return phrase.toUpperCase().split(' ').reduce<string>((accumulator, word) => {
      return accumulator + word[0]
    }, "")
  }
}
