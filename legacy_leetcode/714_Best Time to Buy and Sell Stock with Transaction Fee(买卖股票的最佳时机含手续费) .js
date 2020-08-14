/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
  const days = prices.length
  if (days === 0) return 0

  let dp_i_0 = 0
  let dp_i_1 = -Infinity

  for (let i = 0; i < days; ++i) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, temp - prices[i] - fee)
  }

  return dp_i_0
}
// @lc code=end

