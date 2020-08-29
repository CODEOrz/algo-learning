/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let ret = 0
  let power = 31

  //JS强制转为无符号数
  n = n >>> 0

  while (n) {
    ret += (n & 1) << power
    n >>>= 1
    power -= 1
  }

  return ret >>> 0 // 转化为无符号数
}
// @lc code=end

