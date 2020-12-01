/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return []
  let stack = [root]
  let result = []
  let count = 0

  while (stack.length > 0) {
    const len = stack.length
    let temp = []
    let tempArr = []
    for (let i = 0; i < len; ++i) {
      let curr = null
      curr = stack.pop()

      tempArr.push(curr.val)
      if (count % 2 === 0) {
        if (curr.left) temp.push(curr.left)
        if (curr.right) temp.push(curr.right)
      } else {
        if (curr.right) temp.push(curr.right)
        if (curr.left) temp.push(curr.left)
      }
    }
    result.push(tempArr)
    stack = temp
    count++
  }
  return result
}
// @lc code=end

