/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false
  }
  const rows = matrix.length
  const cols = matrix[0].length

  let currRow = 0
  let currCol = cols - 1
  while (currRow <= rows - 1 && currCol >= 0) {
    if (matrix[currRow][currCol] > target) {
      --currCol
    } else if (matrix[currRow][currCol] < target) {
      ++currRow
    } else {
      return true
    }
  }
  return false
}
// @lc code=end

