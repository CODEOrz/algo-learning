/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/**
 * 解法一： 先找到一维数组再搜索，时间复杂度不是最优
 */
// var searchMatrix = function (matrix, target) {
//   function search(i) {
//     let left = 0
//     let right = matrix[i].length - 1
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2)
//       if (matrix[i][mid] === target) {
//         return true
//       } else if (matrix[i][mid] < target) {
//         left = mid + 1
//       } else if (matrix[i][mid] > target) { 
//         right = mid - 1
//       }
//     }
//     return false
//   }

//   if (matrix.length === 0) { // 边界情况 1
//     return false
//   }

//   for (let i = 0; i < matrix.length; ++i) {
//     if (i === matrix.length - 1) { // 边界情况 2
//       return search(i)
//     }
//     if (matrix[i][0] <= target) {
//       if (matrix[i + 1][0] > target) {
//         return search(i)
//       } else {
//         continue
//       }
//     }
//   }
// }

/**
 * 解法二： 将二维数组转化为一维数组处理
 */
var searchMatrix = function (matrix, target) { 
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }

  const row = matrix.length
  const col = matrix[0].length
  
  let start = 0
  let end = row * col - 1
  
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    val = matrix[Math.floor(mid / col)][mid % col]
    if (val < target) {
      start = mid + 1
    } else if (val > target) {
      end = mid - 1
    } else {
      return true
    }
  }

  return false
}
// @lc code=end

