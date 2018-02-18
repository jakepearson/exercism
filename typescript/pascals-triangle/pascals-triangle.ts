export default class Triangle {
  rows: number[][]
  lastRow: number[]

  constructor(rows: number) {
    this.rows = []
    this.rows.push([1])
    for (let i = 1; i < rows; i++) {
      const previous = this.rows[i - 1]
      const row: number[] = []
      for (let j = 0; j <= previous.length; j++) {
        const left = previous[j - 1] || 0
        const right = previous[j] || 0
        row.push(left + right)
      }
      this.rows.push(row)
    }
    this.lastRow = this.rows[this.rows.length - 1]
  }
}
