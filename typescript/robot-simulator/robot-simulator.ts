export default class Robot {
  bearing: string
  coordinates: number[]
  directions = ['north', 'east', 'south', 'west']

  constructor(x: number = 0, y: number = 0, direction: string = 'north') {
    this.orient(direction)
    this.at(x, y)
  }

  toIndex(direction: string): number {
    const bearing = this.directions.indexOf(direction)
    if (bearing < 0) {
      throw new Error('Invalid Robot Bearing')
    }
    return bearing
  }

  orient(direction: string) {
    this.toIndex(direction)
    this.bearing = direction
  }

  at(x: number, y: number) {
    this.coordinates = [x, y]
  }

  evaluate(steps: string) {
    return steps.split('').map((step) => {
      switch (step) {
        case 'R': return this.turnRight()
        case 'L': return this.turnLeft()
        case 'A': return this.advance()
        default: throw new Error('Unknown instruction')
      }
    })
  }

  instructions(steps: string): string[] {
    return steps.split('').map((step) => {
      switch (step) {
        case 'R': return 'turnRight'
        case 'L': return 'turnLeft'
        case 'A': return 'advance'
        default: throw new Error('Unknown instruction')
      }
    })
  }

  turnRight() {
    const index = this.toIndex(this.bearing)
    this.bearing = this.directions[(index + 1) % this.directions.length]
  }

  turnLeft() {
    const index = this.toIndex(this.bearing)
    this.bearing = this.directions[(index - 1 + this.directions.length) % this.directions.length]
  }

  advance() {
    switch (this.bearing) {
      case 'north': {
        this.coordinates[1]++
        break
      }
      case 'west': {
        this.coordinates[0]--
        break
      }
      case 'south': {
        this.coordinates[1]--
        break
      }
      case 'east': {
        this.coordinates[0]++
        break
      }
    }
  }
}