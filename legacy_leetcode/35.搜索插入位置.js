/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 *  解法一： 自己写的。比标准解法少了判断条件，注意讨论待插入值为最小或最大情况
 *  会发现，left始终正确地代表了插入位置，其中 right = mid - 1; left = mid + 1是关键
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (target < nums[mid]) {
      right = mid - 1
    } else if (target >= nums[mid]) {
      left = mid + 1
    }
  }

  return left
}
// @lc code=end

