/*****************************************************************
 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。
 一个机器人从坐标 [0, 0] 的格子开始移动，
 它每次可以向左、右、上、下移动一格（不能移动到方格外），
 也不能进入行坐标和列坐标的数位之和大于k的格子。
 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
 但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 请问该机器人能够到达多少个格子？

 示例 1：

 输入：m = 2, n = 3, k = 1
 输出：3
 示例 2：

 输入：m = 3, n = 1, k = 0
 输出：1
 提示：

 1 <= n,m <= 100
 0 <= k <= 20
*****************************************************************/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

function isInRange(num1, num2, k) {
  let sum = 0
  while (num1 > 0) {
    sum += num1 % 10
    num1 = Math.floor(num1 / 10)
  }
  while (num2 > 0) {
    sum += num2 % 10
    num2 = Math.floor(num2 / 10)
  }
  const res = sum <= k
  return res
}

function search(row, col, k, maxRow, maxCol, visited) {
  if (
    row < 0 || col < 0 ||
    row >= maxRow || col >= maxCol || visited[row][col] || !isInRange(row, col, k)
  ) {
    return 0
  }

  visited[row][col] = true
  const sum = 1
    + search(row, col + 1, k, maxRow, maxCol, visited)
    + search(row + 1, col, k, maxRow, maxCol, visited)
    + search(row, col - 1, k, maxRow, maxCol, visited)
    + search(row - 1, col, k, maxRow, maxCol, visited)
  return sum
}

var movingCount = function (m, n, k) {
  let visited = []
  for (let i = 0; i < m; ++i) {
    visited.push(new Array(n).fill(false))
  }
  let ans = search(0, 0, k, m, n, visited)
  return ans
}
