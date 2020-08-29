/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * }
 */

/**
 * @param {Node} node
 * @return {Node}
 */
/**
 * 解法一： 标准解法。使用HashMap记录已访问节点，使用递归完成Clone
 */
var cloneGraph = function (node) {
  function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }

  function clone(node, visited) {
    if (node === null) {
      return null
    }
    if (visited.has(node)) {
      return visited.get(node)
    }
    let newNode = new Node(node.val, [])
    visited.set(node, newNode) // 在邻节点中遍历时，就可以返回已经创建的新节点。
    for (let i = 0; i < node.neighbors.length; ++i) {
      newNode.neighbors[i] = clone(node.neighbors[i], visited)
    }
    return newNode
  }

  let visited = new Map()
  return clone(node, visited)
}
// @lc code=end

