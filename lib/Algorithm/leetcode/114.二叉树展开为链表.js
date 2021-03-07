/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

/**
 * Solution A: 自己的解法，时间和空间效率均不是最佳
 * 时间N，空间N
 */
// var flatten = function (root) {
//     if (!root) {
//         return null
//     }

//     if (!root.left && !root.right) {
//         return root
//     }

//     const originalRight = root.right

//     root.right = flatten(root.left)

//     root.left = null

//     let currentRight = root

//     while (!!currentRight.right) {
//         currentRight = currentRight.right
//     }

//     if (!!currentRight) {
//         currentRight.right = flatten(originalRight)
//     }

//     return root
// }

/**
 * Solution B: 相比解法A，此解法不返回任何值，更符合题设
 * 时间N，空间N
 */

// var flatten = function (root) {
//     if (!root) return

//     flatten(root.left)
//     flatten(root.right)

//     const _left = root.left
//     const _right = root.right

//     root.left = null
//     root.right = _left

//     let _root = root

//     while (!!_root.right) {
//         _root = _root.right
//     }

//     _root.right = _right
// }

/**
 * Solution C: 寻找前驱节点，原地算法
 * 时间N，空间1
 */

var flatten = function (root) {
    
}

// @lc code=end
