/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
 */

const { keys } = require('lodash')

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
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root) {
        return null
    }

    if (root.val < key) {
        root.right = deleteNode(root.right, key)
        return root
    }

    if (root.val > key) {
        root.left = deleteNode(root.left, key)
        return root
    }

    if (root.val === key) {
        /** 左右节点都为空 */
        if (!root.left && !root.right) {
            return null
        }

        /** 右节点都为空 */
        if (!!root.left && !root.right) {
            root = root.left
            return root
        }

        /** 左节点都为空 */
        if (!!root.right && !root.left) {
            root = root.right
            return root
        }

        /** 左右节点都不为空 */
        const _cacheRightNode = root.right
        let _prefixNode = root.left
        root = root.left
        while (!!_prefixNode.right) {
            _prefixNode = _prefixNode.right
        }
        _prefixNode.right = _cacheRightNode
        
        return root
    }
}
// @lc code=end
