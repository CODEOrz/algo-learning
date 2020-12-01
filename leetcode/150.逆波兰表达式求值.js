/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

const { mapKeys } = require("lodash")

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let marks = ['+', '-', '*', '/']
  let stack = []
  while (tokens.length !== 0) {
    const temp = tokens.shift()
    if (marks.includes(temp)) {
      const num1 = stack.pop()
      const num2 = stack.pop()
      const calResult = eval(`num2${temp}num1`)
      stack.push(
        (calResult > 0 ? Math.floor : Math.ceil)(calResult)
      )
    } else {
      stack.push(parseInt(temp))
    }
  }
  return stack.pop()
}
// @lc code=end

