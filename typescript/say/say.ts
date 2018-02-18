export default class Say {
  getOnesAndTeens(ones: number) {
    switch (ones) {
      case 0: return ''
      case 1: return 'one'
      case 2: return 'two'
      case 3: return 'three'
      case 4: return 'four'
      case 5: return 'five'
      case 6: return 'six'
      case 7: return 'seven'
      case 8: return 'eight'
      case 9: return 'nine'
      case 10: return 'ten'
      case 11: return 'eleven'
      case 12: return 'twelve'
      case 13: return 'thirteen'
      case 14: return 'fourteen'
      case 15: return 'fifteen'
      case 16: return 'sixteen'
      case 17: return 'seventeen'
      case 18: return 'eighteen'
      case 19: return 'nineteen'
      default: throw new Error(`n must be less than 10: ${ones}`)
    }
  }

  getTens(tens: number): string {
    switch (tens) {
      case 2: return 'twenty'
      case 3: return 'thirty'
      case 4: return 'fourty'
      case 5: return 'fifty'
      case 6: return 'sixty'
      case 7: return 'seventy'
      case 8: return 'eighty'
      case 9: return 'ninety'
      default: throw new Error(`n must be less than 10: ${tens}`)
    }
  }

  getHundreds(hundreds: number): string {
    if (hundreds === 0) {
      return ''
    }
    return this.getOnesAndTeens(hundreds) + ' hundred'
  }

  inEnglish(n: number): string {
    if (n < 0 || n > 999999999999) {
      throw new Error('Number must be between 0 and 999,999,999,999.')
    }
    if (n === 0) {
      return 'zero'
    }
    if (n < 20) {
      return this.getOnesAndTeens(n)
    }
    let result = this.getTens(Math.floor(n / 10))
    const ones = this.getOnesAndTeens(n % 10)
    if (ones.length > 0) {
      result += '-' + ones
    }
    return result
  }
}