/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 解法一：自己想的，逻辑有点复杂
 */
var findMin = function (nums) {
  if (nums.length === 0) {
    return
  }

  const leftEndVal = nums[0]
  const rightEndVal = nums[nums.length - 1]
  if (rightEndVal > leftEndVal) { // 说明数组正常有序
    return nums[0]
  }

  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] >= leftEndVal) {
      start = mid + 1
    } else if (nums[mid] <= leftEndVal) {
      end = mid - 1
    }
  }

  if (start >= nums.length) { // 边界情况
    return nums[nums.length - 1]
  }

  return nums[start]
}


/**
 * 解法二：标准解法
 */
// var findMin = function (nums) {
//   if (nums.length === 1) {
//     return nums[0]
//   }

//   let left = 0
//   let right = nums.length - 1

//   if (nums[right] > nums[left]) { // 说明数组正常有序
//     return nums[0]
//   }

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2)
//     if (nums[mid] > nums[mid + 1]) {  // 恰好比后一个大，返回后一个
//       return nums[mid + 1]
//     }
//     if (nums[mid] < nums[mid - 1]) { // 恰好比前一个小，返回当前
//       return nums[mid]
//     }
//     if (nums[mid] > nums[0]) {
//       left = mid + 1
//     } else {
//       right = mid - 1
//     }
//   }

//   return nums[left]
// }
// @lc code=end

