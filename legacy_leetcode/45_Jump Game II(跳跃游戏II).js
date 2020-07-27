/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 解法一：
 * 88ms, 28.08%
 * 43.2MB, 100%
 */
var jump = function (nums) {
  function _findMaxRange(minRange, maxRange) {
    let ranges = []
    for (let i = minRange; i <= maxRange; ++i) {
      ranges.push(i + nums[i])
    }
    const newMaxRange = Math.max(...ranges)
    return newMaxRange
  }

  const n = nums.length
  if (n <= 1) return 0

  let ans = 0
  let minRange = 0
  let maxRange = 0

  while (maxRange < n - 1) {
    ++ans
    const temp = maxRange + 1
    maxRange = _findMaxRange(minRange, maxRange)
    minRange = temp
  }

  return ans
}
// @lc code=end

