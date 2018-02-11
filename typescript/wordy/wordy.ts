export class WordProblem {
  result: number

  constructor(question: string) {
    const parts = question.split(' ')
    let index = 2
    let current = parseInt(parts[index], 10)
    index++
    while (index < parts.length) {
      let operator = parts[index]
      if (operator === 'by') {
        index++
        operator = parts[index]
      }
      let right = parts[index + 1]
      if (right === 'by') {
        index++
        right = parts[index + 1]
      }
      const nextNumber = parseInt(right, 10)
      current = this.calculate(current, operator, nextNumber)
      index += 2
    }
    this.result = current
  }

  private calculate(left: number, operator: string, right: number): number {
    switch (operator) {
      case "plus": return left + right
      case "minus": return left - right
      case "multiplied": return left * right
      case "divided": return left / right
      default: throw new ArgumentError()
    }
  }

  answer(): number {
    return this.result
  }
}

export class ArgumentError extends Error {
}