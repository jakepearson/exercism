export default class Beer {
  static verse(n: number): string {
    return n.toString()
  }

  static sing(from: number, to: number): string {
    return from + " " + to
  }
}