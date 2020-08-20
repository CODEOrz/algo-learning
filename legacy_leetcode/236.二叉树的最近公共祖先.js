/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
/********************************************************************************************
 * 解法一：自己想的，不够简明
 *******************************************************************************************/
// var lowestCommonAncestor = function (root, p, q) {
//   let ans = []

//   function find(root, p, q) {
//     if (root === null) return false

//     const foundInLeftTree = find(root.left, p, q)
//     const foundInRightTree = find(root.right, p, q)
//     const foundInRoot = root.val === p.val || root.val === q.val

//     let count = 0
//     const arr = [foundInLeftTree, foundInRightTree, foundInRoot]
//     arr.forEach(i => {
//       if (i) count++
//     })
//     if (count === 2) {
//       ans = root
//       return false
//     } else if (count === 1) {
//       return true
//     } else if (count === 0) {
//       return false
//     }
//   }

//   find(root, p, q)
//   return ans
// }

/********************************************************************************************
 * 解法二：标准解法
 *******************************************************************************************/
var lowestCommonAncestor = function (root, p, q) {
  // 结束条件
  if (root === null) return root
  // 如果当前节点是待查节点中的一个，则其子树中一定包含另一个，所以当前节点就是两节点的最近公共祖先
  if (root === p || root === q) return root 
  // 分
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  // 合
  if (left != null && right !== null) return root
  if (left != null) return left
  if (right !== null) return right
  return null
}
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n4
// @lc code=end

