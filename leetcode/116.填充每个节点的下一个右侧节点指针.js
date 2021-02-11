/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 分析：在完美二叉树中，
 * 左节点的next指针 指向 右节点
 * 右节点的next指针 指向 是此题需要探讨的问题
 *
 */

/**
 * @param {Node} root
 * @return {Node}
 */

/**
 *  解法A：对于每个节点，处理其左右节点，并逐层处理左节点的所有右子树
 *  及右节点的所有左子树
 *  时间N，空间N
 */

// var connect = function (root) {
//     if (root === null) {
//         return null
//     }

//     if (!!root.left) {
//         root.left.next = root.right

//         let _left = root.left
//         let _right = root.right

//         while (!!_left.right) {
//             _left.right.next = _right.left
//             _left = _left.right
//             _right = _right.left
//         }

//         connect(root.left)
//         connect(root.right)
//     }

//     return root
// }

/**
 *  解法B：增加辅助函数，逐层链接
 *  思路更巧妙一点，且具有更好的空间效率
 */

const connectTwoNodes = (NodeA, NodeB) => {
    if (!NodeA) {
        return
    }

    NodeA.next = NodeB
    connectTwoNodes(NodeA.left, NodeA.right)
    connectTwoNodes(NodeB.left, NodeB.right)
    connectTwoNodes(NodeA.right, NodeB.left)
}

const connect = (root) => {
    if (!root) {
        return null
    }

    connectTwoNodes(root.left, root.right)

    return root
}

// @lc code=end
