/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let resultArr = []

  const binSearch = (arr, target, resultArr) => {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (arr[mid] > target) {
        right = mid - 1
      } else if (arr[mid] < target) {
        left = mid + 1
      } else if (arr[mid] === target) {
        resultArr.push(arr[mid])
        arr = arr.splice(mid, 1)
        return
      }
    }
    return
  }

  if (nums1.length >= nums2.length) {
    nums2 = nums2.sort((a, b) => a - b)
    nums1.forEach(i => { binSearch(nums2, i, resultArr) })
  } else {
    nums1 = nums1.sort((a, b) => a - b)
    nums2.forEach(i => { binSearch(nums1, i, resultArr) })
  }

  return resultArr
}

export default intersect

// 二分查找算法对于该问题不是最佳解答，使用Map统计方法会更好。