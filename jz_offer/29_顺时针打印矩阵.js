/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/**
 * 解法一： 此解法关键在于利用Flag判断，如果有其中一步没有执行，则说明执行完毕
 * 逻辑不是很清楚
 */
// var spiralOrder = function (matrix) {
//   function scan(i, j, rounds) {
//     while (rounds <= totalRounds) {
//       let flag = false
//       // 向右
//       while (j < cols - rounds) {
//         flag = true
//         ans.push(matrix[i][j])
//         ++j
//       }
//       if (!flag) return
//       --j
//       ++i
//       // 向下
//       flag = false
//       while (i < rows - rounds) {
//         flag = true
//         ans.push(matrix[i][j])
//         ++i
//       }
//       if (!flag) return
//       --i
//       --j
//       // 向左
//       flag = false
//       while (j >= rounds) {
//         flag = true
//         ans.push(matrix[i][j])
//         --j
//       }
//       if (!flag) return
//       ++j
//       --i
//      // 向上
//       flag = false
//       while (i >= rounds + 1) {
//         flag = true
//         ans.push(matrix[i][j])
//         --i
//       }
//       if (!flag) return
//       ++i
//       ++j

//       rounds++
//     }
//   }

//   if (matrix.length === 0 || matrix[0].length === 0) return []
//   const rows = matrix.length, cols = matrix[0].length
//   const totalRounds = Math.ceil(Math.min(rows, cols) / 2) - 1
//   const ans = []
//   scan(0, 0, 0)
//   return ans
// }



/**
 * 解法二： 推荐解法: 简单明了, eleNums是关键
 */

var spiralOrder = function (matrix) {
  if (matrix == null || matrix.length == 0) return []

  let result = []
  let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
  let eleNums = matrix.length * matrix[0].length

  while (eleNums >= 1) {
    for (let i = left; i <= right && eleNums >= 1; i++) {
      result.push(matrix[top][i])
      eleNums--
    }
    top++
    for (let i = top; i <= bottom && eleNums >= 1; i++) {
      result.push(matrix[i][right])
      eleNums--
    }
    right--
    for (let i = right; i >= left && eleNums >= 1; i--) {
      result.push(matrix[bottom][i])
      eleNums--
    }
    bottom--
    for (let i = bottom; i >= top && eleNums >= 1; i--) {
      result.push(matrix[i][left])
      eleNums--
    }
    left++
  }

  return result
}

// @lc code=end

