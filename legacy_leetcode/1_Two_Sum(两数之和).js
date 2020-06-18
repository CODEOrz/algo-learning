/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 解法一: 使用HashMap
 * 时间复杂度O(N)， 空间复杂度O(N)
 *
 */

var twoSum = function (nums, target) {
  const n = nums.length
  let hash = new Map()

  for (let i = 0; i < n; ++i) {
    hash.set(nums[i], i)
  }

  for (let i = 0; i < n; ++i) {
    let diff = target - nums[i]
    if (hash.has(diff) && hash.get(diff) !== i) {
      return [i, hash.get(diff)]
    }
  }
}

export default twoSum

/*****************************************************************************************************************************************************
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].


********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
