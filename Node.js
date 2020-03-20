export default class Node {
  constructor(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
    this.count = 1
  }

  show() {
    return this.data
  }

}