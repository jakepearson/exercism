export default class CircularBuffer<T> {
  buffer: T[]
  writePointer: number
  readPointer: number
  size: number
  elementsInBuffer: number

  constructor(size: number) {
    this.size = size
    this.clear()
  }

  clear() {
    this.writePointer = 0
    this.readPointer = 0
    this.buffer = new Array<T>(this.size)
    this.elementsInBuffer = 0
  }

  read(): T {
    if (this.elementsInBuffer > 0) {
      this.elementsInBuffer--
      const result = this.buffer[this.readPointer % this.size]
      this.readPointer++
      return result
    }
    throw new BufferEmptyError()
  }

  write(t: T) {
    if (this.elementsInBuffer === this.size) {
      throw new BufferOverflowError()
    }
    this.buffer[this.writePointer % this.size] = t
    this.writePointer++
    this.elementsInBuffer++
  }

  forceWrite(t: T) {
    this.buffer[this.writePointer % this.size] = t
    this.writePointer++
    if (this.elementsInBuffer < this.size) {
      this.elementsInBuffer++
    } else {
      this.readPointer++
    }
  }
}

export class BufferOverflowError extends Error {
}

export class BufferEmptyError extends Error {
}