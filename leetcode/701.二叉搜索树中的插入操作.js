/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

var insertIntoBST = function (root, val) {
    if (root === null) {
        return new TreeNode(val, null, null)
    }

    if (val > root.val) {
        root.right = insertIntoBST(root.right, val)
    } else {
        root.left = insertIntoBST(root.left, val)
    }

    return root
}

/**
 * 解法B：210302
 */
// var insertIntoBST = function (root, val) {
//     function predecessor(root) {
//         let _root = root
//         while (!!_root.right) {
//             _root = _root.right
//         }
//         return _root
//     }

//     function successor() {
//         let _root = root
//         while (!!_root.left) {
//             _root = _root.left
//         }
//         return _root
//     }

//     if (!root) {
//         return new TreeNode(val)
//     }

//     if (root.val > val) {
//         const _predecessor = predecessor(root)
//         if (_predecessor.val < val) {
//             _predecessor.right = new TreeNode(val)
//         } else {
//             root.left = insertIntoBST(root.left, val)
//         }
//     } else {
//         const _successor = successor(root)
//         if (_successor.val > val) {
//             _successor.left = new TreeNode(val)
//         } else {
//             root.right = insertIntoBST(root.right, val)
//         }
//     }

//     return root
// }
// @lc code=end
