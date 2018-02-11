let globalCounter = 0
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default class RobotName {
  name: string

  constructor() {
    this.resetName()
  }

  resetName() {
    globalCounter++
    const nextID = globalCounter
    const numbers = (nextID % 1000).toString().padStart(3, "0")
    const middle = Math.floor(nextID / 1000) % 26
    const left = Math.floor(nextID / 1000 / 26) % 26
    this.name = `${letters[left]}${letters[middle]}${numbers}`
  }
}