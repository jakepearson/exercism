export default class BinarySearchTree {
  left: BinarySearchTree
  right: BinarySearchTree
  data: number

  constructor(data: number) {
    this.data = data
  }

  insert(n: number) {
    if (n <= this.data) {
      if (this.left) {
        this.left.insert(n)
      } else {
        this.left = new BinarySearchTree(n)
      }
    } else {
      if (this.right) {
        this.right.insert(n)
      } else {
        this.right = new BinarySearchTree(n)
      }
    }
  }

  each(mapper: (t: number) => void) {
    if (this.left) {
      this.left.each(mapper)
    }
    mapper(this.data)
    if (this.right) {
      this.right.each(mapper)
    }
  }
}