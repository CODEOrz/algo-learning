/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let _prev = -Infinity
    const stack = []

    while (!!root || stack.length > 0) {
        while (!!root) {
            stack.push(root)
            root = root.left
        }

        const curr = stack.pop()
        if (curr.val <= _prev) {
            return false
        } else {
            _prev = curr.val
        }

        root = curr.right
    }

    return true
}
// @lc code=end
