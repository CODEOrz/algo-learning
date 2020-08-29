/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
const levelOrder = root => {
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
    result.push(tempArr)
    stack = temp
  }
  return result
}
// @lc code=end

