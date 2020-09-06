/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

 /**
  * 解法一： 递归，备忘录式的解法
  */
// function power(x, n, resMap) {
//   if (x === 0) return 0
//   if (resMap.has(n)) {
//     return resMap.get(n)
//   }
//   const n1 = Math.floor(n / 2)
//   const n2 = n - n1
//   const res = power(x, n1, resMap) * power(x, n2, resMap)
//   resMap.set(n, res)
//   // console.log(`x=${x} n=${n} res=${res} n1=${n1} n2=${n2}`)
//   return res
// }

// var myPow = function (x, n) {
//   let resMap = new Map()
//   const minusFlag = n < 0
//   if (minusFlag) {
//     n = -n
//   }
//   resMap.set(0, 1)
//   resMap.set(1, x)
//   resMap.set(2, x * x)
//   let ans = power(x, n, resMap)
//   if (minusFlag) {
//     ans = 1 / ans
//   }
//   return ans
// }

/**
  * 解法二： 递归，通过位运算优化power函数
  */
 function power(base, n) {
  console.log(n)
  if (n === 0) return 1
  if (n === 1) return base
  let result = power(base, n >>> 1) // 无符号右移，否则会在某些边界情况下出错
  result *= result
  if (n & 1 === 1) result *= base // 奇数时，再乘1
  return result
}

var myPow = function (x, n) {
  const minusFlag = n < 0
  if (minusFlag) {
    n = -n
  }
  let ans = power(x, n)
  if (minusFlag) {
    ans = 1 / ans
  }
  return ans
}
// @lc code=end
