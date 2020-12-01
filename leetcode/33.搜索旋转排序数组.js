/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 解法一： 先找最小值位置，再二分求解， 2Log（N）
 * 这个解法蠢得跟傻逼一样
 */
// var search = function (nums, target) {
//   function biSearch(nums) {
//     console.log(nums)
//     let start = 0
//     let end = nums.length - 1

//     while (start <= end) {
//       let mid = Math.floor((start + end) / 2)
//       if (nums[mid] > target) {
//         end = mid - 1
//       } else if (nums[mid] < target) {
//         start = mid + 1
//       } else {
//         return mid
//       }
//     }

//     return (start === nums.length || nums[start] !== target) ? -1 : start
//   }


//   if (nums.length === 0) {
//     return -1
//   }

//   const leftEndVal = nums[0]
//   const rightEndVal = nums[nums.length - 1]
//   if (rightEndVal >= leftEndVal) { // 说明数组正常有序
//     return biSearch(nums)
//   }

//   let start = 0
//   let end = nums.length - 1

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2)
//     if (nums[mid] >= leftEndVal && nums[mid] >= rightEndVal) {
//       start = mid + 1
//     } else if (nums[mid] <= leftEndVal && nums[mid] <= rightEndVal) {
//       end = mid - 1
//     }
//   }

//   if (target >= nums[0]) {
//     const res = biSearch(nums.splice(0, start))
//     return res
//   } else {
//     const res = biSearch(nums.splice(start, nums.length - start))
//     return res === -1 ? res : res + start
//   }
// }

/**
 * 解法二： 标准解法
 */
var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[mid] >= nums[0]) {
      if (nums[mid] >= target && target >= nums[start]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }

  return (start === nums.length || nums[start] !== target) ? -1 : start
}
// @lc code=end