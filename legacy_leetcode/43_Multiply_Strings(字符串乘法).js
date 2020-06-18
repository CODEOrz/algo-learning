/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

/**
 * 解法一: 自解
 * 92 ms, faster than 40.03%
 * 42.4 MB, less than 17.21%
 */

// var multiply = function (num1, num2) {
//   if (num1 === '0' || num2 === '0') return '0'
//   const num1Arr = num1.split('').reverse()
//   const num2Arr = num2.split('').reverse()
//   let res = []

//   for (let i = 0; i < num2Arr.length; ++i) {
//     res.push(new Array(num1Arr.length + num2Arr.length).fill(0))
//   }

//   for (let i = 0; i < num2Arr.length; ++i) {
//     for (let j = 0; j < num1Arr.length; ++j) {
//       let product = parseInt(num2Arr[i]) * parseInt(num1Arr[j])
//       res[i][i + j] += product % 10
//       res[i][i + 1 + j] += Math.floor(product / 10)
//     }
//   }

//   let tmp = new Array(num1Arr.length + num2Arr.length).fill(0)
//   for (let i = 0; i < res.length; ++i) {
//     for (let j = 0; j < res[i].length; ++j) {
//       let innerTmp = tmp[j] + res[i][j]
//       tmp[j] = innerTmp % 10
//       let s = Math.floor(innerTmp / 10)
//       if (s > 0) {
//         tmp[j + 1] += s
//       }
//     }
//   }

//   while (tmp[tmp.length - 1] === 0) tmp.pop()
//   return tmp.reverse().join('')
// }

/**
 * 解法二: 标准解法
 * 72 ms, faster than 76.31%
 * 37.9 MB, less than 36.90%
 */

var multiply = function (num1, num2) {
  let num1Len = num1.length
  let num2Len = num2.length
  let res = new Array(num1Len + num2Len).fill(0)

  for (let i = num1Len - 1; i >= 0; --i) {
    for (let j = num2Len - 1; j >= 0; --j) {
      let product = num1[i] * num2[j]
      let sum = product + res[i + j + 1]
      res[i + j] += Math.floor(sum / 10)
      res[i + j + 1] = sum % 10
    }
  }

  while(res[0] === 0) res.shift()
  return res.length === 0 ? '0' : res.join('')
}

export default multiply

/*****************************************************************************************************************************************************
Share
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
********************************************************************************************************************************************************
[Comment]



********************************************************************************************************************************************************/
