/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * 解法一: 标准解法
 * 使用前缀和，加HashMap, 时间复杂度O(N)
 * 84 ms, faster than 73.83% 
 * 42.6 MB, less than 39.07%
 */

var subarraySum = function (nums, k) {
  let count = 0
  let sumI = 0
  let preSum = new Map()
  preSum.set(0, 1)

  for (let i = 0; i < nums.length; ++i) {
    sumI += nums[i]
    let temp = sumI - k
    if (preSum.has(temp)) {
      count += preSum.get(temp)
    }
    preSum.set(sumI, preSum.has(sumI) ? preSum.get(sumI) + 1 : 1)
  }

  return count
}

export default subarraySum

/*****************************************************************************************************************************************************
Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

Example 1:

Input:nums = [1,1,1], k = 2
Output: 2
 

Constraints:

The length of the array is in range [1, 20,000].
The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].
********************************************************************************************************************************************************
[Comment]



********************************************************************************************************************************************************/
