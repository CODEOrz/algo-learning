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

// 解法A [自解] ：BFS
// 时间复杂度不是最佳
/*
 * Encodes a tree to a single string.
 */

// function serialize(root: TreeNode | null): string {
//     if (!root) {
//         return ''
//     }

//     const stringArray: Array<number | null> = []
//     let _root = root
//     let stack = [_root]

//     while (stack.length > 0) {
//         const tempStack = []

//         while (stack.length > 0) {
//             _root = stack.shift()
//             if (!!_root) {
//                 stringArray.push(_root.val)
//                 tempStack.push(_root.left)
//                 tempStack.push(_root.right)
//             } else {
//                 stringArray.push(null)
//             }
//         }

//         stack = tempStack
//     }

//     const result: string = stringArray.join(',')
//     return result
// }

// /*
//  * Decodes your encoded data to tree.
//  */
// function deserialize(data: string): TreeNode | null {
//     if (!data) {
//         return null
//     }

//     const treeNodeValueArray: Array<string> = data.split(',')

//     let root = new TreeNode(parseInt(treeNodeValueArray.shift()))
//     const vRoot = root

//     let stack = [root]

//     while (stack.length > 0) {
//         const tempStack = []

//         while (stack.length > 0) {
//             root = stack.shift()
//             if (!!root) {
//                 const leftNodeVal = treeNodeValueArray.shift()
//                 root.left = !!leftNodeVal ? new TreeNode(parseInt(leftNodeVal)) : null
//                 const rightNodeVal = treeNodeValueArray.shift()
//                 root.right = !!rightNodeVal ? new TreeNode(parseInt(rightNodeVal)) : null
//                 tempStack.push(root.left)
//                 tempStack.push(root.right)
//             }
//         }

//         stack = tempStack
//     }

//     return vRoot
// }

// 解法B：前序遍历/DFS/
// 不要对数组进行PUSH/SHIFT操作
// 时间效率高
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
    if (data === 'null') {
        return null
    }

    const arr = data.split(',')
    let index = -1
    const dfs = () => {
        ++index
        if (arr[index] === 'null' || arr.length <= index) {
            return null
        }
        const root = new TreeNode(parseFloat(arr[index]))

        root.left = dfs()
        root.right = dfs()

        return root
    }

    return dfs()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
