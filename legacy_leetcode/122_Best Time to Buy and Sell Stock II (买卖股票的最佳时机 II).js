/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 解法一：动态规划
 */
// const maxProfit = prices => {
//   const days = prices.length
//   if (days === 0) return 0

//   let dp = []
//   for (let i = 0; i < days; ++i) {
//     dp.push(new Array(2).fill(0))
//   }

//   for (let i = 0; i < days; ++i) {
//     if (i === 0) {
//       dp[i][0] = 0
//       dp[i][1] = -prices[i]
//       continue
//     }
//     dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
//     dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
//   }

//   return dp[days - 1][0]
// }

/**
 * 解法二：动态规划，压缩状态空间
 */
const maxProfit = prices => {
  const days = prices.length
  if (days === 0) return 0

  let dp_i_0 = 0
  let dp_i_1 = -Infinity

  for (let i = 0; i < days; ++i) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i])
  }

  return dp_i_0
}
// @lc code=end

