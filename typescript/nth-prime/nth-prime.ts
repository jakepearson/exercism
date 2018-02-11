export default class Prime {
  primes: number[] = [1]

  private isPrime(n: number): boolean {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n / i === Math.floor(n / i)) {
        return false
      }
    }
    return true
  }

  private addAPrime() {
    let n = this.primes[this.primes.length - 1] + 1
    while (!this.isPrime(n)) {
      n++
    }
    this.primes.push(n)
  }

  nth(n: number): number {
    if (n < 1) {
      throw new Error('Prime is not possible')
    }

    while (this.primes.length < n + 1) {
      this.addAPrime()
    }
    return this.primes[n]
  }
}