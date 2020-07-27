/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */


/**
 * 解法一：
 * 88ms, 32.22%
 * 37.9MB, 62.5%
 */
var canJump = function (nums) {
  const n = nums.length
  if (n <= 1) return true

  let maxRange = 0

  for (let i = 0; i < n - 1; ++i) {
    if (i > maxRange) return false
    if (i + nums[i] > maxRange) maxRange = nums[i] + i
    if (i + nums[i] < n - 1) {
      continue
    } else {
      return true
    }
  }

  return false
}
// @lc code=end

