export default class BinarySearch {
  array: number[]

  constructor(data: number[]) {

    let trouble = false
    for (let i = 1; i < data.length; i++) {
      if (data[i - 1] > data[i]) {
        trouble = true
      }
    }
    if (!trouble) {
      this.array = data
    }
  }

  indexOf(n: number, left = 0, right = this.array.length - 1): number {
    const middleIndex = Math.floor((right - left) / 2) + left
    const middle = this.array[middleIndex]
    if (middle === n) {
      return middleIndex
    }
    if (left === middleIndex) {
      return -1
    }
    if (n < middle) {
      return this.indexOf(n, left, middle)
    }
    return this.indexOf(n, middle, right)
  }
}
