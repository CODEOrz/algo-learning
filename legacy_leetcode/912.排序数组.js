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
  function Sort(nums) {
    function partion(start, end) {
      function swap(arr, a, b) {
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
      }
      let pivot = start
      swap(nums, end, pivot)
      let small = start - 1
      for (let i = start; i < end; ++i) {
        if (nums[i] < nums[end]) {
          ++small
          if (small !== i) {
            swap(nums, i, small)
          }
        }
      }
      // 将pivot值与当前最小值右边的值交换
      ++small
      swap(nums, end, small)
      return small
    }

    function quickSort(start, end) {
      if (start === end) {
        return
      }
      const index = partion(start, end)
      if (index > start) {
        quickSort(start, index - 1)
      }
      if (index < end) {
        quickSort(index + 1, end)
      }
    }

    const len = nums.length
    quickSort(0, len - 1)
    return nums
  }

  // 归并排序
  //   function Sort(nums) {
  //     // 结束条件(condition)
  //     if (nums.length <= 1) {
  //       return nums
  //     }
  //     // 分(divide)
  //     const pivot = Math.floor(nums.length / 2)
  //     const leftRes = Sort(nums.splice(0, pivot))
  //     const rightRes = Sort(nums)
  //     // 合(conquer)
  //     let res = []
  //     let leftIdx = 0
  //     let rightIdx = 0
  //     while ((leftIdx < leftRes.length) && (rightIdx < rightRes.length)) {
  //       if (leftRes[leftIdx] <= rightRes[rightIdx]) {
  //         res.push(leftRes[leftIdx])
  //         leftIdx++
  //       } else {
  //         res.push(rightRes[rightIdx])
  //         rightIdx++
  //       }
  //     }
  //     while (leftIdx < leftRes.length) {
  //       res.push(leftRes[leftIdx])
  //       leftIdx++
  //     }
  //     while (rightIdx < rightRes.length) {
  //       res.push(rightRes[rightIdx])
  //       rightIdx++
  //     }
  //     return res
  //   }
  return Sort(nums)
}
// @lc code=end

