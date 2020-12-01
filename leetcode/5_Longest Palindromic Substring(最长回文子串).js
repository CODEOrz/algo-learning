/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const n = s.length
  let dp = []
  let ans = ''
  for (let i = 0; i < n; ++i) dp.push(new Array(n).fill(false))

  for (let subLength = 0; subLength < n; ++subLength) {
    for (let i = 0; i < n; ++i) {
      const j = i + subLength
      if (j >= n) break

      if (subLength === 0) {
        dp[i][j] = true
      } else if (subLength === 1) {
        dp[i][j] = (s[i] === s[j])
      } else {
        dp[i][j] = (dp[i + 1][j - 1] && s[i] === s[j])
      }

      if (dp[i][j] && ((subLength + 1) > ans.length)) {
        const cp = s
        ans = cp.substring(i, j + 1)
      }
    }
  }
  return ans
}
// @lc code=end

