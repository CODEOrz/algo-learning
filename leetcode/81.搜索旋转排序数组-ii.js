/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
      return true
    }
    if (nums[mid] > nums[start]) {
      if (nums[mid] >= target && target >= nums[start]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else if (nums[mid] < nums[start]) {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    } else if (nums[mid] === nums[start]) {
      start++ // 当开头元素与Mid元素一样时，Start++，否则无法判断
    }
  }

  return !(start === nums.length || nums[start] !== target)
}
// @lc code=end

