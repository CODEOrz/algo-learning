/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */



/**
 * 解法一： 递归，使用flag
 */
// var isBalanced = function (root) {

//   function depth(node) {
//     if (node === null) {
//       return 0
//     }
//     if (node.left === null && node.right === null) {
//       return 1
//     }

//     const leftDepth = depth(node.left)
//     const rightDepth = depth(node.right)
//     if (Math.abs(leftDepth - rightDepth) > 1) {
//       flag = false
//       return -1
//     }
//     return 1 + Math.max(leftDepth, rightDepth)
//   }

//   let flag = true
//   depth(root)
//   return flag
// }

/**
* 解法二： 递归，当左高度返回-1时，不遍历右子树。
*/
const isBalanced = root => {
  const depth = node => {
    if (node === null) {
      return 0
    }
    if (node.left === null && node.right === null) {
      return 1
    }

    const leftDepth = depth(node.left)
    let rightDepth = -1
    if (leftDepth === -1) {
      return -1
    } else {
      rightDepth = depth(node.right)
    }

    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1
    }

    return rightDepth === -1 ? -1 : 1 + Math.max(leftDepth, rightDepth)
  }

  return depth(root) !== -1
}
// @lc code=end

