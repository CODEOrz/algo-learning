/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
// 本题解答的关键就在于：对于每一节点，都有一个
// SinglePath : 单边最大长度
// MaxPath    : 总体最大长度
function maxPathSum(root) {
  let result = helper(root)
  return result.MaxPath
}

function helper(root) {
  if (root === null) {
    return {
      SinglePath: 0,
      MaxPath: -Infinity
    }
  }

  const left = helper(root.left)
  const right = helper(root.right)

  let result = {}
  if (left.SinglePath > right.SinglePath) {
    // 如果为负数，则单变最大值置为0
    result.SinglePath = Math.max(left.SinglePath + root.val, 0)
  } else {
    result.SinglePath = Math.max(right.SinglePath + root.val, 0)
  }

  result.MaxPath = Math.max(
    right.MaxPath,
    left.MaxPath,
    left.SinglePath + right.SinglePath + root.val
  )

  return result
}

// @lc code=end

