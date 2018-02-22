export default class Triplet {
  a: number
  b: number
  c: number

  constructor(a: number, b: number, c: number) {
    this.a = a
    this.b = b
    this.c = c
  }

  sum(): number {
    return this.a + this.b + this.c
  }

  product(): number {
    return this.a * this.b * this.c
  }

  isPythagorean(): boolean {
    return Math.pow(this.a, 2) + Math.pow(this.b, 2) === Math.pow(this.c, 2)
  }

  static where(minSum: number, maxSum: number): Triplet[] {
    const result: Triplet[] = []
    for (let i = minSum; i <= maxSum; i++) {
      for (let j = i; i + j <= maxSum; j++) {
        for (let k = j; i + j + k <= maxSum; k++) {
          const triplet = new Triplet(i, j, k)
          const sum = triplet.sum()
          if (triplet.isPythagorean() && sum >= minSum && sum <= maxSum) {
            result.push(triplet)
          }
        }
      }
    }
    return result
  }
}