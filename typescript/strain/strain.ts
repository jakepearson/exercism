export function keep<T>(array: T[], filter: (t: T) => boolean): T[] {
  const result: T[] = []
  for (const t of array) {
    if (filter(t)) {
      result.push(t)
    }
  }
  return result
}

export function discard<T>(array: T[], filter: (t: T) => boolean): T[] {
  return keep(array, (t) => !filter(t))
}