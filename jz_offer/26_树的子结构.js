/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

/**
 * 解法一： 自己想的，效率较低，需要考虑很多边界情况
 */
// var isSubStructure = function (A, B) {
//   function BFS(node, target = null) {
//     if (node === null) {
//       return []
//     }
//     let stack = [node]
//     let result = []
//     let candidates = null
//     while (stack.length > 0) {
//       const currStackLength = stack.length
//       let tempStack = []
//       for (let i = 0; i < currStackLength; ++i) {
//         const poppedNode = stack.pop()
//         result.push(poppedNode)
//         if (poppedNode !== null) {
//           if (poppedNode.val === target) {
//             candidates = poppedNode
//           }
//           tempStack.unshift(poppedNode.left)
//           tempStack.unshift(poppedNode.right)
//         }
//       }
//       stack = stack.concat(tempStack)
//       while (result[result.length - 1] === null) {
//         result.pop()
//       }
//     }
//     return { result, candidates }
//   }


//   if (A === null || B === null) {
//     return false
//   }
//   let B_LIST = BFS(B).result
//   let CANDIDATE = BFS(A, B.val).candidates
//   if (CANDIDATE === null) return false
//   let CANDIDATE_LIST = BFS(CANDIDATE).result
//   if (CANDIDATE_LIST.length < B_LIST.length) return false
//   while (B_LIST.length !== 0) {
//     let a = B_LIST.shift()
//     let b = CANDIDATE_LIST.shift()
//     if (a === null && b === null) {
//       continue
//     }
//     if (a.val !== b.val) {
//       return false
//     }
//   }
//   return true
// }

/**
 *  解法二： 标准解法
 */
var isSubStructure = function (A, B) { 
  // 确认节点是否无重复，通过递归或者BFS的方法在A树中找到B树的根节点
  // 对比A树中找到的节点是否和B树相等（此处可递归判断左右节点值是否相等，遍历到叶节点即可返回）
}