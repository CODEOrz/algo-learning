/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */

/**
 * 解法一： 递归，此解法超时，不能AC
 */
// const maxProfit = (k, prices) => {
//   // k = 11
//   // prices = [48,12,60,93,97,42,25,64,17,56,85,93,9,48,52,42,58,85,81,84,69,36,1,54,23,15,72,15,11,94]

//   function dp(opTimes, price, date) {
//     // // console.log(`dp Params: opTimes=${opTimes}, price=${price}, date=${date},`)
//     if (opTimes <= 0) {
//       return 0
//     }
//     if (date === prices.length - 1) {
//       if (price === -1) {
//         // console.log(`未买入，第${date + 1}天不操作，收益0, 剩余交易次数${opTimes}`)
//         return 0
//       } else {
//         // console.log(`已买入, 第${date + 1}天强制卖出，当前价${price}, 收益${prices[date] - price}, 剩余交易次数${opTimes - 1}`)
//         return prices[date] - price
//       }
//     }
//     if (price !== -1) { // pirce不为-1表示当前处于“买入”状态
//       const sell = prices[date] - price + dp(opTimes - 1, -1, date + 1) // 卖出
//       const noOp = dp(opTimes, price, date + 1) // 不操作
//       // console.log(`已买入，第${date + 1}天卖出，当前价${price}, 收益${sell}, 剩余交易次数${opTimes - 1}`)
//       // console.log(`已买入, 第${date + 1}天不操作，当前价${price}, 收益${noOp}, 剩余交易次数${opTimes}`)
//       if (sell > noOp) {
//         return sell
//       } else {
//         return noOp
//       }
//     } else { // pirce为-1表示当前处于“未买入”状态
//       const buy = dp(opTimes, prices[date], date + 1) // 买入
//       const noOp = dp(opTimes, -1, date + 1) // 不操作
//       // console.log(`未买入，第${date + 1}天买入，收益${buy}, 剩余交易次数${opTimes}`)
//       // console.log(`未买入，第${date + 1}天不操作，收益${noOp}, 剩余交易次数${opTimes}`)
//       if (buy > noOp) {
//         return buy
//       } else {
//         return noOp
//       }
//     }
//   }

//   if (prices.length === 0) return 0
//   let memo = {}
//   return dp(k, -1, 0)
// }

/**
 * 解法二：时间复杂度最优
 */
const maxProfit = (k, prices) => {
  const maxProfit_inf = prices => {
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

  const days = prices.length
  if (days === 0) return 0
  if (k >= days / 2) return maxProfit_inf(prices)

  let dp = []
  for (let i = 0; i < days; ++i) {
    dp.push([])
    for (let j = 0; j <= k; ++j) {
      dp[i].push(new Array(2).fill(0))
    }
  }

  for (let i = 0; i < days; ++i) {
    for (let j = 1; j <= k; ++j) {
      if (i === 0) {
        dp[i][j][0] = 0
        dp[i][j][1] = -prices[i]
        continue
      }
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
    }
  }
  return dp[days - 1][k][0]
}

/**
 * 解法三：压缩空间，空间和时间复杂度最优
 */
// const maxProfit = (k, prices) => {
//   const maxProfit_k = prices => {
//     let p_i_0 = 0, p_i_1 = -prices[0]
//     let temp = 0
//     for (let i = 1; i < prices.length; i++) {
//       temp = p_i_0
//       p_i_0 = Math.max(p_i_0, p_i_1 + prices[i])
//       p_i_1 = Math.max(p_i_1, temp - prices[i])
//     }
//     return p_i_0
//   }

//   if (k > prices.length / 2) {
//     return maxProfit_k(prices)
//   }
//   let p0i = new Array(k + 1)
//   let p1i = new Array(k + 1)
//   p0i[0] = 0
//   p1i[0] = -prices[0]
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = 1; j <= k; j++) {
//       if (i === 0) {
//         p0i[j] = 0
//         p1i[j] = -prices[i]
//       } else {
//         p0i[j] = Math.max(p0i[j], p1i[j] + prices[i])
//         p1i[j] = Math.max(p1i[j], p0i[j - 1] - prices[i])
//       }
//     }
//   }
//   return p0i[k]
// }


// @lc code=end

