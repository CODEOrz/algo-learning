/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length
  if (len === 0) return 0

  let dp = []
  dp[0] = nums[0]

  for (let i = 1; i < len; ++i) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
  }

  let res = -Infinity
  for (let i = 0; i < len; ++i) {
    res = Math.max(res, dp[i])
  }
  return res
}
export default maxSubArray

/*****************************************************************************************************************************************************
[Question]
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


[Comment]
状态方程: dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
遍历数组，选择当前元素是否要与前序数组关联
********************************************************************************************************************************************************/
