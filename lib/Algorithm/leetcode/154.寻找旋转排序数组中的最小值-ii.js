/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */


/**
 * 解法一： 顺序遍历：非最优解
 */
// var findMin = function (nums) {
//   if (nums.length === 1) {
//     return nums[0]
//   }

//   if (nums[nums.length - 1] > nums[0]) { // 说明数组正常有序
//     return nums[0]
//   }

//   for (let i = 0; i < nums.length; ++i) {
//     if (i === nums.length - 1) {
//       return nums[nums.length - 1]
//     }
//     if (nums[i] > nums[i + 1]) {
//       return nums[i + 1]
//     }
//   }
// }

/**
 * 解法二： 标准解法
 */
var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0]
  }

  if (nums[nums.length - 1] > nums[0]) { // 说明数组正常有序
    return nums[0]
  }

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] < nums[right]) {
      right = mid // 关键1：不能是 mid - 1,否则无法收缩到正确的位置
    } else if (nums[mid] > nums[right]) {
      left = mid + 1
    } else if (nums[mid] === nums[right]) {
      right -= 1 // 关键2：如果mid等于right值，则一直递减right, 此步骤为了解决 mid和数组尾部 值相同而导致无法判断的问题
    }
  }

  if (left >= nums.length) {
    return nums[nums.length - 1]
  }

  return nums[left]
}

// @lc code=end

