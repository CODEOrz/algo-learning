/**
 * @param {number[][]} triangle
 * @return {number}
 */
/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

const { max, isBuffer } = require("lodash")

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
/**
 * 解法一： 自底向上，先加上上一层的最小值，再求出当前层的最小值
 */
// var minimumTotal = function (triangle) {
//   const n = triangle.length
//   if (n === 0) {
//     return 0
//   }
//   let maxArray = new Array(n).fill(0)
//   for (let i = n - 1; i >= 0; --i) {
//     for (let j = 0; j < triangle[i].length; ++j) {
//       triangle[i][j] += maxArray.shift()
//     }
//     if (triangle[i].length >= 2) {
//       for (let j = 0; j < triangle[i].length - 1; ++j) {
//         maxArray.push(Math.min(triangle[i][j], triangle[i][j + 1]))
//       }
//     } else {
//       maxArray.push(triangle[i][0])
//     }
//   }
//   return maxArray[0]
// }




/**
 * 解法二
 */

var minimumTotal = function (triangle) {
  if (triangle.length === 0) {
    return 0
  }

  for (let i = triangle.length - 2; i >= 0; --i) {
    for (let j = 0; j < triangle[i].length; ++j) {
      triangle[i][j] += Math.min(
        triangle[i + 1][j],
        triangle[i + 1][j + 1]
      )
    }
  }

  return triangle[0][0]
}