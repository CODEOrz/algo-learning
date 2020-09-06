/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 解法一：自己想的，可优化
// var integerBreak = function (n) {
//   if (n < 4) {
//     return n - 1
//   }

//   let dp = [0, 1, 2, 3]
//   for (let i = 4; i <= n; ++i) {
//     dp[i] = Math.max(
//       dp[i - 2] * 2,
//       dp[i - 3] * 3
//     )
//   }
//   return dp[n]
// }

var integerBreak = function (n) {
  if (n < 4) {
    return n - 1
  }
  if (n === 4) return 4

  let dp = [0, 1, 2, 3, 4]
  for (let i = 5; i <= n; ++i) {
    dp[i] = dp[i - 3] * 3
  }
  return dp[n]
}

// 解法二：贪心法
// var integerBreak = function (n) {
//   if (n < 2) return
//   if (n === 2) return 1
//   if (n === 3) return 2

//   let timesOf3 = Math.floor(n / 3)
//   if (n - 3 * timesOf3 === 1) {
//     timesOf3--
//   }
//   const timesOf2 = (n - 3 * timesOf3) / 2
//   return Math.pow(3, timesOf3) * Math.pow(2, timesOf2)
// }
// @lc code=end

