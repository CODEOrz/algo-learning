/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * 解法一 : 自己想的
 * 
 * right = nums.length - 1
 * left <= right
 * right = mid - 1
 * left = mid + 1
 * 在此种条件下，left 可能等于 right + 1,  导致数组越界，因此需要进行检查
 * 
 * 68 ms, faster than 45.69%
 * 35 MB, less than 64.76%
 */

var searchRange = function (nums, target) {
  let res = []
  let leftPos = -1

  let left = 0
  let right = nums.length - 1
  // 找左边界
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      right = mid - 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  leftPos = nums[left] === target ? left : 0
  res.push(nums[left] === target ? left : -1)

  left = leftPos
  right = nums.length - 1
  // 找右边界
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  res.push(nums[right] === target ? right : -1)
  
  return res
}

export default searchRange

/*****************************************************************************************************************************************************
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
