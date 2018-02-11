function primes(input: number, cache: Map<number, number[]>): number[] {
  const fromCache = cache.get(input)
  if (fromCache) {
    return fromCache
  }
  let result: number[] = []

  for (let i = 2; i <= Math.sqrt(input); i++) {
    const possiblyFactored = input / i
    if (possiblyFactored === Math.floor(possiblyFactored)) {
      result.push(i)
      const subFactors = primes(possiblyFactored, cache)
      result = result.concat(subFactors)
      console.log(`Found ${i}, ${possiblyFactored}, ${subFactors}`)
      input = possiblyFactored
    }
  }
  if (result.length === 0 && input > 1) {
    result.push(input)
  }
  cache.set(input, result)
  return result
}

export default function calculatePrimeFactors(input: number): number[] {
  return primes(input, new Map<number, number[]>())
}