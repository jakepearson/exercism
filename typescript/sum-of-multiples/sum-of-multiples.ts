export default class SumOfMultiples {
  multiples: number[]

  constructor(multiples: number[]) {
    this.multiples = multiples
  }

  to(max: number): number {
    const seen = new Set<number>()
    for (const m of this.multiples) {
      for (let i = m; i < max; i += m) {
        seen.add(i)
      }
    }
    let result = 0
    seen.forEach((i) => result += i)
    return result
  }
}