/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
function robRange(nums, start, end) {
  let dp_i_1 = 0
  let dp_i_2 = 0
  let dp_i = 0

  for (let i = end; i >= start; --i) {
    dp_i = Math.max(dp_i_1, nums[i] + dp_i_2)
    dp_i_2 = dp_i_1
    dp_i_1 = dp_i
  }
  return dp_i
}

const rob = nums => {
  const n = nums.length
  if (n === 1) return nums[0]
  // 比较两种情况
  return Math.max(
    robRange(nums, 0, n - 2),
    robRange(nums, 1, n - 1)
  )
}

// @lc code=end

