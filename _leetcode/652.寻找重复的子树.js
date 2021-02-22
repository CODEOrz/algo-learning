/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */

/**
 * 解法A：深度优先搜索 + 序列化
 * 时间N^2, 空间N^2
 */
var findDuplicateSubtrees = function (root) {
    const collect = (node) => {
        if (!node) {
            return '#'
        }

        let serial = `${node.val},${collect(node.left)},${collect(node.right)}`

        if (!countMap[serial]) {
            countMap[serial] = 1
        } else {
            countMap[serial] += 1
        }

        if (countMap[serial] === 2) {
            ans.push(node)
        }

        return serial
    }

    const ans = []
    let countMap = {}

    collect(root)
    return ans
}

/**
 * 解法B：唯一标识符方法
 * 时间N，空间N
 */

var findDuplicateSubtrees = function (root) {
    const collect = (node) => {
        if (!node) {
            return 0
        }

        const serial = `${node.val},${collect(node.left)},${collect(node.right)}`
        if (!trees[serial]) {
            t++
            trees[serial] = t
        }
        const uid = trees[serial]

        if (!countMap[uid]) {
            countMap[uid] = 1
        } else {
            countMap[uid] += 1
        }

        if (countMap[uid] === 2) {
            ans.push(node)
        }

        return uid
    }

    let t = 1
    let countMap = {}
    let trees = {}
    const ans = []

    collect(root)
    return ans
}

// @lc code=end
