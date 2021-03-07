/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function (root) {
  if (root === null) return []
  let stack = [root]
  let result = []

  while (stack.length > 0) {
    const len = stack.length
    let temp = []
    let tempArr = []
    for (let i = 0; i < len; ++i) {
      const curr = stack.shift()
      tempArr.push(curr.val)
      if (curr.left) temp.push(curr.left)
      if (curr.right) temp.push(curr.right)
    }
    // console.log(tempArr)
    result.unshift(tempArr)
    stack = temp
  }
  return result
}
// @lc code=end

