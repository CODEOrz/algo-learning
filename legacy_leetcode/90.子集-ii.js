/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  function backTrace(path, i) {
    res.push(path)
    for (let j = i; j < nums.length; ++j) {
      if (
        j !== i &&              // 当前i指示的位置一定会被加入路径
        nums[j] === nums[j - 1] // 避免重复
      ) {
        continue
      }
      backTrace(path.concat([nums[j]]), j + 1)
    }
  }

  nums = nums.sort((a, b) => a - b)

  const res = []
  backTrace([], 0)
  return res
}
// @lc code=end

