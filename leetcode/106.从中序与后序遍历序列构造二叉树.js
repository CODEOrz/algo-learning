/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

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
 * @param {number[]} inOrder
 * @param {number[]} postOrder
 * @return {TreeNode}
 */

const buildTree = (inOrder, postOrder) => {
    const _buildTree = (inStart, inEnd, postStart, postEnd) => {
        if (postStart > postEnd) {
            return null
        }

        const currentVal = postOrder[postEnd]
        const currentIndexOfInOrder = indexMap.get(currentVal)

        const node = new TreeNode(currentVal)
        if (postStart === postEnd) {
            return node
        }

        const numOfLeftNodes = currentIndexOfInOrder - inStart
        node.left = _buildTree(
            inStart,
            inStart + numOfLeftNodes - 1,
            postStart,
            postStart + numOfLeftNodes - 1
        )
        node.right = _buildTree(
            currentIndexOfInOrder + 1,
            inEnd,
            postStart + numOfLeftNodes,
            postEnd - 1
        )
        return node
    }

    if (inOrder?.length < 1 || postOrder?.length < 1) {
        return null
    }

    const indexMap = new Map()
    inOrder.forEach((i, index) => {
        indexMap.set(i, index)
    })

    return _buildTree(0, inOrder.length - 1, 0, postOrder.length - 1)
}
// @lc code=end
