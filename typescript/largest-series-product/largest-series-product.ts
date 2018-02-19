export default class Series {
  numbers: number[]

  constructor(input: string) {
    this.numbers = input.split("").map((i) => {
      const result = parseInt(i, 10)
      if (isNaN(result)) {
        throw new Error("Invalid input.")
      }
      return result
    })
  }

  private multiply(startIndex: number, size: number): number {
    let result = this.numbers[startIndex]
    for (let i = 1; i < size; i++) {
      result *= this.numbers[i + startIndex]
    }
    return result
  }

  largestProduct(size: number): number {
    if (size < 0) {
      throw new Error("Invalid input.")
    }
    if (size > this.numbers.length) {
      throw new Error('Slice size is too big.')
    }
    if (size === 0) {
      return 1
    }

    let result = 0
    for (let i = 0; i < this.numbers.length - size + 1; i++) {
      const product = this.multiply(i, size)
      if (product > result) {
        result = product
      }
    }
    return result
  }
}