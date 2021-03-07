/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
  // 返回条件
  if (root === null) return 0
  // 分
  let leftDepth = 1 + maxDepth(root.left)
  let rightDepth = 1 + maxDepth(root.right)
  // 合
  return Math.max(leftDepth, rightDepth)
}
// @lc code=end

