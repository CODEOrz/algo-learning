/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */

// 解法A：[自解]
// 先中序遍历，然后累加值数组，再次中序遍历替换值
// 时间2N，空间N
var convertBST = function (root) {
    let valList = []

    const inorder = (root) => {
        if (!root) return
        inorder(root.left)
        valList.push(root.val)
        inorder(root.right)
    }

    const accumulateValList = (list) => {
        const _list = [...list]
        for (let i = _list.length - 2; i >= 0; --i) {
            _list[i] += _list[i + 1]
        }
        return _list
    }

    const inorderReplace = (root) => {
        if (!root) return
        inorderReplace(root.left)
        root.val = valList.shift()
        inorderReplace(root.right)
    }

    inorder(root)
    valList = accumulateValList(valList)
    inorderReplace(root)

    return root
}

// 解法B 反序中序遍历
// 时间O(n)，其中 nn 是二叉搜索树的节点数。每一个节点恰好被遍历一次。
// 空间O(n)，为递归过程中栈的开销，平均情况下为O(logn) ，最坏情况下树呈现链状，为 O(n) 。

var convertBST = function (root) {
    let sum = 0

    const inorderReplace = (root) => {
        if (!!root) {
            inorderReplace(root.right)
            sum += root.val
            root.val = sum
            inorderReplace(root.left)
        }
    }

    inorderReplace(root)
    return root
}

// 解法C Morris方法




var convertBST = function (root) {
    let num = 0

    const findPreNodeWhenInorder = (root) => {
        const _root = root
        let _node = root.right
        while (!!_node?.left && _node.left !== _root) {
            _node = _node.left
        }
        return _node
    }

    const _root = root

    while (!!root) {
        if (!!root.right) {
            const preNode = findPreNodeWhenInorder(root)
            if (!!preNode.left) {
                preNode.left = null
                num += root.val
                root.val = num
                root = root.left
            } else {
                preNode.left = root
                root = root.right
            }
        } else {
            num += root.val
            root.val = num
            root = root.left
        }
    }

    return _root
}

// [4,2,6,1,3,5,7]
// [0,null,1]
// @lc code=end
