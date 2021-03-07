/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 解法一
 */
// var rob = function (nums) {
//   let n = nums.length
//   let dp = new Array(n + 2).fill(0)
//   for (let i = n - 1; i >= 0; --i) {

//     // console.log(`nums[${i}] = ${nums[i]}`)
//     // console.log(`choose = ${nums[i] + dp[i + 2]}`)
//     // console.log(`notChoose = ${dp[i + 1]}`)

//     // const choose = nums[i] + dp[i + 2]
//     // const notChoose = dp[i + 1]
//     // if (choose > notChoose) {
//     //   console.log('选择')
//     // } else {
//     //   console.log('不选择')
//     // }


//     dp[i] = Math.max(dp[i + 1], nums[i] + dp[i + 2])

//     // console.log(`dp[${i}] = ${dp[i]}`)
//     // console.log('\n')
//   }
//   return dp[0]
// }

/**
 * 解法二： 空间复杂度为O(1)
 */
var rob = function (nums) {
  let n = nums.length
  let dp_i_1 = 0
  let dp_i_2 = 0
  let dp_i = 0

  for (let i = n - 1; i >= 0; --i) {
    dp_i = Math.max(dp_i_1, nums[i] + dp_i_2)
    dp_i_2 = dp_i_1
    dp_i_1 = dp_i
  }
  return dp_i
}
// @lc code=end

