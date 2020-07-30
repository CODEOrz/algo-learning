/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 思路十分巧妙，利用 -1 的性质去检验
var findDisappearedNumbers = function (nums) {
  const n = nums.length
  let ans = []

  for (let i = 0; i < n; ++i) {
    // 关键的两步
    const newIdx = Math.abs(nums[i]) - 1
    if (nums[newIdx] > 0) nums[newIdx] *= -1
  }

  for (let i = 1; i < n + 1; ++i) {
    if (nums[i - 1] > 0) ans.push(i)
  }
  
  return ans
}
// @lc code=end

