/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
/**
 * 解法一
 */
// var inorderTraversal = function (root) {
//   if (root === null) {
//     return []
//   }

//   let stack = [root]
//   let ans = []

//   while (stack.length !== 0) {
//     while (root.left !== null) {
//       stack.push(root.left)
//       root = root.left
//     }
//     const temp = stack.pop()
//     ans.push(temp.val)
//     if (temp.right !== null) {
//       stack.push(temp.right)
//       root = temp.right
//     }
//   }

//   return ans
// }

/**
 * 解法二
 */
var inorderTraversal = function (root) {
  if (root === null) {
    return []
  }

  let stack = []
  let ans = []

  while (stack.length !== 0 || root !== null) {
    while (root !== null) {
      stack.push(root)
      root = root.left
    }
    const temp = stack.pop()
    ans.push(temp.val)
    root = temp.right
  }
  
  return ans
}
// @lc code=end

