/*
 * @lc app=leetcode.cn id=260 lang=javascript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let bitmask = nums.reduce((sum, i) => sum ^ i)

  // 通过 bitmask & (-bitmask) 
  // 保留 bitmask 最右边的 1，这个 1 要么来自 x，要么来自 y
  diff = bitmask & (- bitmask)

  let x = 0

  nums.forEach(num => {
    if (num & diff) { // 当num & diff === 0时，则该num是所求结果中的一个
      x ^= num
    }
  })

  return [x, bitmask ^ x]
}
// @lc code=end

