/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  const days = prices.length
  if (days === 0) return 0

  let dp = []
  for (let i = 0; i < days; ++i) {
    dp.push([])
    for (let j = 0; j <= 2; ++j) {
      dp[i].push(new Array(2).fill(0))
    }
  }

  for (let i = 0; i < days; ++i) {
    for (let j = 2; j >= 1; --j) {
      if (i === 0) {
        dp[i][j][0] = 0
        dp[i][j][1] = -prices[i]
        continue
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
    }
  }
  return dp[days - 1][2][0]
}
// @lc code=end

