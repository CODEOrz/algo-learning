/**
 * @param {number[]} nums
 * @return {number[]}
 */


 /**
  * 解法一：解耦，可扩展的方法（基于《剑指OFFER》）
  */
 function swap(arr, index_1, index_2) {
  const temp = arr[index_1]
  arr[index_1] = arr[index_2]
  arr[index_2] = temp
}

function isOdd(num)  {
  return num & 1 === 1
}

var exchange = function (nums, judgeFunc = isOdd) {
  if (nums.length <= 1) {
    return nums
  }
  let evenIndex = 0, currIndex = 0
  while (judgeFunc(nums[currIndex]) && evenIndex <= nums.length) {
    evenIndex++
    currIndex++
  }
  while (currIndex < nums.length - 1) {
    currIndex++
    if (judgeFunc(nums[currIndex])) {
      swap(nums, evenIndex, currIndex) 
      evenIndex++
    }
  }
  return nums
}
