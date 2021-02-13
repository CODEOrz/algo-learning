/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

const { isBuffer } = require('lodash')

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
    if (!inorder || inorder.length === 0) {
        return null
    }
    const node = new TreeNode(preorder.shift())
    const indexInInorder = inorder.findIndex((i) => i === node.val)
    node.left = buildTree(preorder, inorder.slice(0, indexInInorder))
    node.right = buildTree(preorder, inorder.slice(indexInInorder + 1))
    return node
}
// @lc code=end
