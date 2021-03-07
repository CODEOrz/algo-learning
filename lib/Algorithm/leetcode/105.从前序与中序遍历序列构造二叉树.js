/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/**
 * 解法A：标准解法, 此解法的关键在于，preOrder的起止点，
 */
var buildTree = function (preorder, inorder) {
    function TreeNode(val) {
        this.val = val
        this.left = this.right = null
    }

    function builder(preorderStart, preorderEnd, inorderStart, inorderEnd) {
        if (preorderStart > preorderEnd) {
            return null
        }
        let rootVal = preorder[preorderStart]
        let root = new TreeNode(rootVal)
        if (preorderStart === preorderEnd) {
            return root
        } else {
            let rootIndex = indexMap.get(rootVal)
            let leftNodes = rootIndex - inorderStart
            root.left = builder(
                preorderStart + 1,
                preorderStart + leftNodes,
                inorderStart,
                rootIndex - 1
            )
            root.right = builder(
                preorderStart + leftNodes + 1,
                preorderEnd,
                rootIndex + 1,
                inorderEnd
            )
            return root
        }
    }

    if (preorder == null || preorder.length == 0) {
        return null
    }

    let indexMap = new Map()
    for (let i = 0; i < inorder.length; ++i) {
        indexMap.set(inorder[i], i)
    }

    return builder(0, preorder.length - 1, 0, inorder.length - 1)
}

/**
 * 第2次重写
 * 解法 B：此思路比较巧妙，利用先序遍历先构造左树，后构造右数的特点
 *
 */

// var buildTree = function (preorder, inorder) {
//     if (!inorder || inorder.length === 0) {
//         return null
//     }
//     const node = new TreeNode(preorder.shift())
//     const indexInInorder = inorder.findIndex((i) => i === node.val)
//     node.left = buildTree(preorder, inorder.slice(0, indexInInorder))
//     node.right = buildTree(preorder, inorder.slice(indexInInorder + 1))
//     return node
// }

var buildTree = function (preorder, inorder) {
    if (inorder.length === 0) {
        return null
    }
    const currVal = preorder[0]
    const node = new TreeNode(currVal)
    const indexInInorder = inorder.findIndex((i) => i === currVal)
    node.left = buildTree(preorder.slice(1, indexInInorder + 1), inorder.slice(0, indexInInorder))
    node.right = buildTree(preorder.slice(indexInInorder + 1), inorder.slice(indexInInorder + 1))
    return node
}
// @lc code=end
