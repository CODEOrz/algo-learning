/**
 * 解法一
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0
  
  let q = []
  let depth = 1
  q.push(root)
  while (q.length > 0) {
    const qLen = q.length
    for (let i = 0; i < qLen; ++i) {
      let curr = q.shift()
      if (curr.left === null && curr.right === null) {
        return depth
      }
      if (curr.left !== null) {
        q.push(curr.left)
      }
      if (curr.right !== null) {
        q.push(curr.right)
      }
    }
    depth++
  }

  return depth
}

export default minDepth

/*****************************************************************************************************************************************************
[Question]
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.

[Comment]

********************************************************************************************************************************************************/
