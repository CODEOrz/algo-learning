/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 带MEMO的动态规划解法
var isMatch = function (text, pattern) {
  function dp(i, j) {
    let ans = null

    if (memo[`${i}-${j}`]) {
      return memo[`${i}-${j}`]
    }
    if (j === pattern.length) {
      return i === text.length
    }

    const first = i < text.length && [text[i], '.'].includes(pattern[j])

    if (
      (j <= pattern.length - 2) &&
      (pattern[j + 1] === '*')
    ) {
      ans = dp(i, j + 2) || (first && dp(i + 1, j))
    } else {
      ans = first && dp(i + 1, j + 1)
    }
    memo[`${i}-${j}`] = ans
    return ans
  }

  let memo = {}
  return dp(0, 0)
}

// 使用DP数组的动态规划解法
// const isMatch = (s, p) => {
//   if (s == null || p == null) return false
//   let len1 = s.length, len2 = p.length
//   let dp = new Array(len1 + 1)
//   for (let i = 0; i < dp.length; i++)
//     dp[i] = new Array(len2 + 1).fill(false) // 将项默认为false

//   dp[0][0] = true
//   for (let j = 1; j < len2 + 1; j++) {
//     if (p[j - 1] == '*')
//       dp[0][j] = dp[0][j - 2]
//   }
//   for (let i = 1; i < len1 + 1; i++) {
//     for (let j = 1; j < len2 + 1; j++) {
//       if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
//         dp[i][j] = dp[i - 1][j - 1]
//       } else if (p[j - 1] == "*") {
//         if (s[i - 1] == p[j - 2] || p[j - 2] == ".")
//           dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
//         else
//           dp[i][j] = dp[i][j - 2]
//       }
//     }
//   }
//   return dp[len1][len2]
// }
// @lc code=end

