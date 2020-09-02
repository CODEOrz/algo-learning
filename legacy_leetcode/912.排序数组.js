/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  // 快速排序
  // function Sort(nums) {
  //   if (nums.length === 0) {
  //     return []
  //   }
  //   const pivot = nums[0]
  //   const leftPart = []
  //   const rightPart = []
  //   for (let i = 1; i < nums.length; ++i){
  //     if (nums[i] >= pivot) {
  //       rightPart.push(nums[i])
  //     } else {
  //       leftPart.push(nums[i])
  //     }
  //   }
  //   return Sort(leftPart).concat(pivot, Sort(rightPart))
  // }

  // 归并排序
  function Sort(nums) {
    // 结束条件(condition)
    if (nums.length <= 1) {
      return nums
    }
    // 分(divide)
    const pivot = Math.floor(nums.length / 2)
    const leftRes = Sort(nums.splice(0, pivot))
    const rightRes = Sort(nums)
    // 合(conquer)
    let res = []
    let leftIdx = 0
    let rightIdx = 0
    while ((leftIdx < leftRes.length) && (rightIdx < rightRes.length)) {
      if (leftRes[leftIdx] <= rightRes[rightIdx]) {
        res.push(leftRes[leftIdx])
        leftIdx++
      } else {
        res.push(rightRes[rightIdx])
        rightIdx++
      }
    }
    while (leftIdx < leftRes.length) {
      res.push(leftRes[leftIdx])
      leftIdx++
    }
    while (rightIdx < rightRes.length) {
      res.push(rightRes[rightIdx])
      rightIdx++
    }
    return res
  }
  return Sort(nums)
}
// @lc code=end

