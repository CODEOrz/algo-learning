/*
 * @lc app=leetcode.cn id=201 lang=javascript
 *
 * [201] 数字范围按位与
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// var rangeBitwiseAnd = function (m, n) {
//   while (m < n) {
//     n = n & (n - 1)
//   }
//   return n
// }

var rangeBitwiseAnd = function (m, n) {
  let shift = 0
  
  while (m < n) {
    m >>>= 1
    n >>>= 1
    shift += 1
  }

  return m << shift
}
// @lc code=end

