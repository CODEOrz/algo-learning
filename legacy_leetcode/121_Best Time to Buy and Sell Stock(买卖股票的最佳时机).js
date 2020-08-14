/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * 解法一： 递归，耗时太长
 */
// const maxProfit = prices => {
//   function dp(opTimes, price, date) {
//     if (opTimes <= 0) {
//       return 0
//     }
//     if (date === prices.length - 1) {
//       if (price === -1) {
//         return 0
//       } else {
//         return prices[date] - price
//       }
//     }
//     if (price !== -1) { // pirce不为-1表示当前处于“买入”状态
//       const sell = prices[date] - price + dp(opTimes - 1, -1, date + 1) // 卖出
//       const noOp = dp(opTimes, price, date + 1) // 不操作
//       if (sell > noOp) {
//         return sell
//       } else {
//         return noOp
//       }
//     } else { // pirce为-1表示当前处于“未买入”状态
//       const buy = dp(opTimes, prices[date], date + 1) // 买入
//       const noOp = dp(opTimes, -1, date + 1) // 不操作
//       if (buy > noOp) {
//         return buy
//       } else {
//         return noOp
//       }
//     }
//   }

//   if (prices.length === 0) return 0
//   return dp(1, -1, 0)
// }

/**
 * 解法二：动态规划
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
//     dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
//   }

//   return dp[days - 1][0]
// }

/**
 * 解法三：动态规划，压缩状态空间
 */
const maxProfit = prices => {
  const days = prices.length
  if (days === 0) return 0

  let dp_i_0 = 0
  let dp_i_1 = -Infinity

  for (let i = 0; i < days; ++i) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
    dp_i_1 = Math.max(dp_i_1, -prices[i])
  }

  return dp_i_0
}

// @lc code=end

