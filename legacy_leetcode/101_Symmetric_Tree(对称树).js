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


/**
 * 解法一
 * 84 ms, faster than 22.87%
 * 37.4 MB, less than 23.83%
 */

// var isSymmetric = function (root) {
//   if (root === null) return true
//   if (root.left === null && root.right === null) return true
//   let q = []
//   q.push(root.left, root.right)

//   while (q.length > 0) {
//     let tmp = []
//     const qLen = q.length
//     q.forEach(i => {
//       if (i !== null) {
//         tmp.push(i.left)
//         tmp.push(i.right)
//       }
//     })
//     for (let i = 0; i < qLen / 2; ++i) {
//       let qStart = q.shift()
//       let qEnd = q.pop()

//       if (qStart === null && qEnd === null) continue
//       if (
//         (qStart !== null && qEnd === null) ||
//         (qEnd !== null && qStart === null)
//       ) {
//         return false
//       }
//       if (qStart.val !== qEnd.val) {
//         return false
//       }
//     }
//     q = tmp
//   }

//   return true
// }

/**
 * 解法二 递归
 * 84 ms, faster than 22.87%
 * 37.4 MB, less than 23.83%
 */

var isSymmetric = function(root) {
  return root === null || isMirror(root.left, root.right)
}

const isMirror = (lTree, rTree) => {
  if (lTree === null && rTree === null) {
    return true
  }
  
  else if (lTree !== null && rTree !== null) {
    return lTree.val === rTree.val &&
      isMirror(lTree.left, rTree.right) &&
      isMirror(lTree.right, rTree.left)
  }
  else {
    return false
  }
}

export default isSymmetric

/*****************************************************************************************************************************************************
[Question]
On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

Examples:

Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.
Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
Input: board = [[3,2,4],[1,5,0]]
Output: 14
Note:

board will be a 2 x 3 array as described above.
board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].




********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
