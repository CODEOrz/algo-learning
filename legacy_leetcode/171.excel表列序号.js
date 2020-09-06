/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

const { curryRight, times } = require("lodash")

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  s = s.split('')

  let ans = 0
  let times = 1
  while (s.length > 0) {
    let curr = s.pop()
    let diff = curr.charCodeAt() - 'A'.charCodeAt() + 1
    ans += diff * times
    times *= 26
  }
  return ans
}
// @lc code=end

