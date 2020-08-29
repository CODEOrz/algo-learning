/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
/**
 * 解法一：
 */
// var numIslands = function (grid) {
//   function explore(i, j) {
    
//     if (
//       (i < 0 || j < 0 || i >= height || j >= width) ||
//       visited[i][j] ||
//       grid[i][j] === '0'
//     ) {
//       return
//     }
//     visited[i][j] = true

//     explore(i - 1, j)
//     explore(i, j - 1)
//     explore(i + 1, j)
//     explore(i, j + 1)
//   }

//   const height = grid.length
//   if (height === 0) {
//     return 0
//   }
//   const width = grid[0].length

//   let ans = 0
//   let visited = []
//   for (let i = 0; i < height; ++i) {
//     visited.push([])
//   }

//   for (let i = 0; i < height; ++i) {
//     for (let j = 0; j < width; ++j) {
//       const curr = grid[i][j]
//       if (!visited[i][j] && curr === '1') {
//         explore(i, j)
//         ans++
//       }
//     }
//   }

//   return ans
// }


/**
 * 解法二：移除visited数组，直接在原数组上改动
 */
var numIslands = function (grid) {
  function explore(i, j) {
    
    if (
      (i < 0 || j < 0 || i >= height || j >= width) ||
      grid[i][j] === '0'
    ) {
      return
    }
    grid[i][j] = '0'

    explore(i - 1, j)
    explore(i, j - 1)
    explore(i + 1, j)
    explore(i, j + 1)
  }

  const height = grid.length
  if (height === 0) {
    return 0
  }
  const width = grid[0].length

  let ans = 0
  
  for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
      if (grid[i][j] === '1') {
        explore(i, j)
        ans++
      }
    }
  }

  return ans
}
// @lc code=end

