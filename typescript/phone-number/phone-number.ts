export default class PhoneNumber {
  input: string
  constructor(input: string) {
    this.input = input
  }

  number() {
    return this.input.replace("(", "")
      .replace(")", "")
      .replace(" ", "")
      .replace("-", "")
  }
}