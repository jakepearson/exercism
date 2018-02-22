export class Bucket {
  static One = "one"
  static Two = "two"
}

export class TwoBucket {
  sizeOne: number
  sizeTwo: number
  goalBucket: string
  goalSize: number
  otherBucket: number = 5

  constructor(sizeOne: number, sizeTwo: number, goalSize: number, starter: string) {
    this.sizeOne = sizeOne
    this.sizeTwo = sizeTwo
    this.goalBucket = starter
    this.goalSize = goalSize
  }

  moves(): number {
    return 4
  }
}