class Node {
  constructor(data, left, right) {
    this.val = data
    this.left = left
    this.right = right
  }

  show() {
    return this.val
  }
}

function deepClone(obj) {
  function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
  }
  if (!isObject(obj)) {
    throw new Error('obj 不是一个对象！')
  }

  let isArray = Array.isArray(obj)
  let cloneObj = isArray ? [] : {}
  for (let key in obj) {
    cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  }

  return cloneObj
}
class BST {
  constructor() {
    this.root = null
  }

  init(initArr) {
    if (initArr && initArr.length > 0) {
      initArr.forEach(i => {
        this.insert(i)
      })
    }
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
        if (data < current.val) {
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
  //递归先序遍历
  preOrder(node) {
    if (!(node === null)) {
      console.log(node.show() + ' ')
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
  }
  //递归中序遍历
  inOrder(node) {
    if (!(node === null)) {
      this.inOrder(node.left)
      console.log(node.show() + ' ')
      this.inOrder(node.right)
    }
  }
  //递归后序遍历
  postOrder(node) {
    if (!(node === null)) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      console.log(node.show() + ' ')
    }
  }
  //非递归先序遍历
  preOrder_noRecurse(node) {
    let root = deepClone(node)
    if (root === null) {
      return null
    }
    let result = []
    let stack = []

    while (root !== null || stack.length !== 0) {
      while (root !== null) {
        result.push(root.val)
        stack.push(root)
        root = root.left
      }
      const node = stack.pop()
      root = node.right
    }
    console.log(result)
  }
  //非递归中序遍历
  inOrder_noRecurse(node) {
    let root = deepClone(node)
    if (root === null) {
      return null
    }
    let result = []
    let stack = []

    while (root !== null || stack.length !== 0) {
      while (root !== null) {
        stack.push(root)
        root = root.left
      }
      const node = stack.pop()
      result.push(node.val)
      root = node.right
    }
    console.log(result)
  }
  //非递归后序遍历
  postOrder_noRecurse(node) {
    let root = deepClone(node)
    if (root === null) {
      return null
    }
    let result = []
    let stack = []
    let lastVisit = null

    while (root !== null || stack.length !== 0) {
      while (root !== null) {
        stack.push(root)
        root = root.left
      }
      // 后序遍历的主要区别如下
      const node = stack[stack.length - 1]
      if (node.right === null || node.right === lastVisit) {
        stack.pop()
        result.push(node.val)
        lastVisit = node // 关键
      } else {
        root = node.right
      }
    }
    console.log(result)
  }
  // 从上至下的 DFS
  dfs(node, result) {
    let root = node
    if (root === null) return
    result.push(root.val)
    this.dfs(root.left, result)
    this.dfs(root.right, result)
  }
  // 使用分治法的，从下至上的 DFS
  dfs_DAC(root) {
    let result = []
    // 返回条件
    if (root === null) {
      return result
    }
    // 分
    let left = this.dfs_DAC(root.left)
    let right = this.dfs_DAC(root.right)
    // 合
    result.push(root.val)
    result = result.concat(left)
    result = result.concat(right)
    return result
  }
  // BFS
  bfs(root) {
    let stack = [root]
    let result = []
    while (stack.length > 0) {
      const len = stack.length
      let temp = []
      for (let i = 0; i < len; ++i) {
        const curr = stack.pop()
        result.push(curr.val)
        if (curr.left) temp.push(curr.left)
        if (curr.right) temp.push(curr.right)
      }
      stack = temp
    }
    return result
  }
}

let tree = new BST()
tree.init([54, 31, 29, 68, 44, 90, 82, 71, 11, 21])
console.log(tree.bfs(tree.root))