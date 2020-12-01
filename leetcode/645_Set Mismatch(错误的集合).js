/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 解法一
 * 96ms, 60.68%
 * 40.5MB, 100%
 */

var findErrorNums = function (nums) {
  const n = nums.length
  let ans = []

  for (let i = 0; i < n; ++i) {
    const newIdx = Math.abs(nums[i]) - 1
    if (nums[newIdx] <= 0) { // 之前出现过，已经被乘过 -1
      ans.unshift(newIdx + 1)
    } else {
      nums[newIdx] *= -1
    }
  }

  for (let i = 0; i < n; ++i) {
    if (nums[i] > 0) ans.push(i + 1)
  }

  return ans
}
// @lc code=end

