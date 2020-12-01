/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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

/**
 * 解法一：递归
 */
// var rob = function (root) {
//   function robBinTree(node) {
//     if (node === null) {
//       return 0
//     }
//     if (node.left === null && node.right === null) {
//       return node.val
//     } else if (node.left === null) {
//       return Math.max(
//         node.val + robBinTree(node.right.left) + robBinTree(node.right.right),
//         robBinTree(node.right)
//       )
//     } else if (node.right === null) {
//       return Math.max(
//         node.val + robBinTree(node.left.left) + robBinTree(node.left.right),
//         robBinTree(node.left)
//       )
//     } else {
//       return Math.max(
//         node.val + robBinTree(node.left.left) + robBinTree(node.left.right) + robBinTree(node.right.left) + robBinTree(node.right.right),
//         robBinTree(node.left) + robBinTree(node.right)
//       )
//     }
//   }

//   return robBinTree(root)
// }

/**
 * 解法二：动态规划
 */
const rob = root => {
  const res = dp(root);
  return Math.max(res[0], res[1]);
}

/* 返回一个大小为 2 的数组 arr
arr[0] 表示不抢 root 的话，得到的最大钱数
arr[1] 表示抢 root 的话，得到的最大钱数 */
const dp = (root) => {
  if (root == null) {
    return [0, 0]
  }

  let left = dp(root.left)
  let right = dp(root.right)
  // 抢，下家就不能抢了
  let rob = root.val + left[0] + right[0];
  // 不抢，下家可抢可不抢，取决于收益大小
  let not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  return [not_rob, rob]
}
// @lc code=end

