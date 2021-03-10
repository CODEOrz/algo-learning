/*
 * @lc app=leetcode.cn id=297 lang=typescript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/*
 * Encodes a tree to a single string.
 */

function serialize(root: TreeNode | null): string {
    if (root === null) return 'null'

    return `${root.val},${serialize(root.left)},${serialize(root.right)}`
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    console.log(data)
    if (!data) {
        return null
    }

    const treeNodeValueArray: Array<string> = data.split(',')

    let root = new TreeNode(parseInt(treeNodeValueArray.shift()))
    const vRoot = root

    let stack = [root]

    while (stack.length > 0) {
        const tempStack = []

        while (stack.length > 0) {
            root = stack.shift()
            if (!!root) {
                const leftNodeVal = treeNodeValueArray.shift()
                root.left = !!leftNodeVal ? new TreeNode(parseInt(leftNodeVal)) : null
                const rightNodeVal = treeNodeValueArray.shift()
                root.right = !!rightNodeVal ? new TreeNode(parseInt(rightNodeVal)) : null
                tempStack.push(root.left)
                tempStack.push(root.right)
            }
        }

        stack = tempStack
    }

    return vRoot
}

// [1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4,1,null,2,null,3,null,4]
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
