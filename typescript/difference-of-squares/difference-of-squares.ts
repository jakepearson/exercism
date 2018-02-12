export default class Squares {
  sumOfSquares = 0
  squareOfSums = 0
  difference = 0

  constructor(n: number) {
    let sums = 0
    for (let i = 1; i <= n; i++) {
      sums += i
      this.sumOfSquares += Math.pow(i, 2)
    }
    this.squareOfSums = Math.pow(sums, 2)
    this.difference = this.squareOfSums - this.sumOfSquares
  }
}