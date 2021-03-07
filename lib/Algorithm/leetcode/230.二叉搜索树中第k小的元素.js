/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 解法A：[自解]
// 利用递归中序遍历，及辅助变量

var kthSmallest = function (root, k) {
    let count = 0
    let target = null

    const inorder = (root) => {
        if (!root || !!target) {
            return
        }
        inorder(root.left)
        count++
        if (count === k) {
            target = root
        }
        inorder(root.right)
    }

    inorder(root)
    return target.val
}

// 解法B：[自解]
// 迭代
var kthSmallest = function (root, k) {
    const stack = []

    while (!!root || stack.length > 0) {
        while (!!root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (--k === 0) {
            return root.val
        }
        root = root.right
    }

    return null
}

// @lc code=end
