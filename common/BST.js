import Node from './Node'
export default class BST {
  constructor() {
    this.root = null
  }

  insert(data) {
    let n = new Node(data, null, null)
    if (this.root === null) {
      this.root = n
    }
    else {
      let current = this.root
      let parent
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = n
            break
          }
        }
        else {
          current = current.right
          if (current === null) {
            parent.right = n
            break
          }
        }
      }
    }
  }

  preOrder(node) {
    if (!(node === null)) {
      putstr(node.show() + ' ')
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
}

let tree = new BST()
tree.insert(23)
tree.preOrder(tree.root)
