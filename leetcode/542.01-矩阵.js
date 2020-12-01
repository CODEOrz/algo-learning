/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function (matrix) {
  const height = matrix.length
  const width = matrix[0].length

  let q = []

  for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
      if (matrix[i][j] === 0) {
        q.push([i, j])
      } else {
        matrix[i][j] = -1
      }
    }
  }

  const directions = [[0, 1], [0, -1], [-1, 0], [1, 0]]
  while (q.length !== 0) {
    let point = q.shift()
    x = point[0]
    y = point[1]

    for (v of directions) {
      let newX = x + v[0]
      let newY = y + v[1]
      if (
        newX >= 0 && newY >= 0 &&
        newX < height && newY < width &&
        matrix[newX][newY] === -1
      ) {
        matrix[newX][newY] = matrix[x][y] + 1
        q.push([newX, newY])
      }
    }
  }

  return matrix
}
// @lc code=end

