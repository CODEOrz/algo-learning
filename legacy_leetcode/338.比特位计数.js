/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number[]}
 */
/**
 * 解法一：动态规划 + 最高有效位
 * 一个数2^m, 比比它小2^(m-1)次方的数，二进制多1个1
 */
// var countBits = function (num) {
//   num = 16
//   let ans = new Array(num + 1).fill(0)
//   let i = 0
//   let b = 1

//   while (b <= num) {
//     while (i < b && i + b <= num) {
//       ans[i + b] = ans[i] + 1
//       ++i
//     }
//     i = 0
//     b = b << 1
//   }

//   return ans
// }

/**
 * 解法二：动态规划 + 最低有效位
 * 此法较解法一更浅显易懂
 */
// var countBits = function (num) {
//   let ans = new Array(num + 1).fill(0)
//   for (let i = 0; i <= num; ++i) {
//     ans[i] = ans[i >> 1] + (i & 1)
//   }
//   return ans
// }

/**
 * 解法三：动态规划 + 最后设置位
 * 此法更为精妙，利用i & (i - 1)，去掉数的最后一个1
 */
var countBits = function (num) {
  let ans = new Array(num + 1).fill(0)
  for (let i = 1; i <= num; ++i) {
    ans[i] = ans[i & (i - 1)] + 1
  }
  return ans
}
// @lc code=end

