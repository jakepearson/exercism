export default class Series {
  digits: number[]

  constructor(s: string) {
    this.digits = s.split('').map((i) => parseInt(i, 10))
  }

  slices(n: number): number[][] {
    if (n > this.digits.length) {
      throw new Error()
    }

    const result: number[][] = []
    for (let i = 0; i < this.digits.length - n + 1; i++) {
      result.push(this.digits.slice(i, i + n))
    }
    return result
  }
}