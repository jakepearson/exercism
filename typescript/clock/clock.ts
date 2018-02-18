export default class Clock {
  hours: number
  minutes: number

  constructor(hours: number, minutes: number = 0) {
    this.hours = hours
    this.minutes = minutes
    this.normalize()
  }

  toString(): string {
    return this.hours.toString().padStart(2, "0") + ":" + this.minutes.toString().padStart(2, "0")
  }

  normalize() {
    while (this.minutes < 0) {
      this.minutes += 60
      this.hours -= 1
    }
    this.hours += Math.floor(this.minutes / 60)
    this.minutes %= 60

    while (this.hours < 0) {
      this.hours += 24
    }
    this.hours %= 24
  }

  plus(minutes: number): Clock {
    this.minutes += minutes
    this.normalize()
    return this
  }

  minus(minutes: number): Clock {
    return this.plus(-minutes)
  }

  equals(clock: Clock): boolean {
    return this.toString() === clock.toString()
  }
}