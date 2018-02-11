class Node<T> {
  constructor(value: T) {
    this.value = value
  }

  public left: Node<T> | undefined
  public right: Node<T> | undefined
  public value: T
}

export default class LinkedList<T> {
  first: Node<T> | undefined
  last: Node<T> | undefined
  size: number

  constructor() {
    this.size = 0
  }

  push(t: T) {
    this.size++
    if (!this.first) {
      this.first = new Node<T>(t)
      this.last = this.first
    } else {
      const oldFirst = this.first
      this.first = new Node<T>(t)
      this.first.right = oldFirst
      oldFirst.left = this.first
    }
  }

  pop(): T {
    if (!this.first) {
      throw new Error("Nothing to pop")
    }
    this.size--
    const result = this.first.value
    if (this.first === this.last) {
      this.first = undefined
      this.last = undefined
    } else {
      this.first = this.first.right
      if (this.first) {
        this.first.left = undefined
      }
    }
    return result
  }

  shift(): T {
    if (!this.last) {
      throw new Error("Nothing to unshift")
    }
    this.size--
    const result = this.last.value
    if (this.first === this.last) {
      return this.pop()
    }

    this.last = this.last.left
    return result
  }

  unshift(t: T) {
    this.size++
    if (!this.last) {
      this.push(t)
    } else {
      const oldLast = this.last
      this.last = new Node<T>(t)
      this.last.left = oldLast
      oldLast.right = this.last.left
    }
  }

  delete(t: T): boolean {
    let current = this.first
    while (current) {
      if (current && current.value === t) {
        if (current.left) {
          current.left.right = current.right
        }
        if (current.right) {
          current.right.left = current.left
        }
        this.size--
        return true
      }
      current = current.right
    }
    return false
  }

  count(): number {
    return this.size
  }
}