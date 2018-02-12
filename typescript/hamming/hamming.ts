export default class Hamming {
  compute(input1: string, input2: string): number {
    if (input1.length !== input2.length) {
      throw new Error('DNA strands must be of equal length.')
    }
    let result = 0
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] !== input2[i]) {
        result++
      }
    }
    return result
  }
}