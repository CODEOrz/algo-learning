/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// var validateStackSequences = function (pushed, popped) {
//   if (pushed.length === 0 && popped.length === 0) {
//     return true
//   }
//   if (pushed.length === 0 || popped.length === 0) {
//     return false
//   }

//   let validateStack = []
//   while (pushed.length > 0 || popped.length > 0) {
//     // console.log('循环开始')
//     // console.log(pushed)
//     // console.log(popped)
//     validateStack.push(pushed.shift())
//     while (
//       validateStack[validateStack.length - 1] === popped[0] &&
//       (pushed.length !== 0 || popped.length !== 0)
//     ) {
//       popped.shift()
//       validateStack.pop()

//       // console.log('匹配到对应序列')
//       // console.log(pushed)
//       // console.log(popped)
//     }
//     if (pushed.length === 0 && popped.length > 0) {
//       return false
//     }
//   }
//   return true
// }

/**
 * 解法二： 
 */
var validateStackSequences = function (pushed, popped) {
  const stack = [];
  pushed.forEach((ele) => {
    stack.push(ele)
    while (stack.length && stack[stack.length - 1] === popped[0]) {
      stack.pop()
      popped.shift()
    }
  })
  return !stack.length;
}
// @lc code=end