/**
 * @param {number} n
 * @return {string[]}
 */

/**
 * 解法一 : 自己想的
 */

var generateParenthesis = function (n) {
  let res = []
  let stack = []
  let tmp = []

  function generator(num, stack, tmp) {
    if (tmp.length > n) return
    if (num === 0) {
      if (tmp.length === 0) res.push([...stack].join(''))
      return
    }

    num--

    stack.push('(')
    tmp.push('(')
    generator(num, stack, tmp)
    stack.pop()
    tmp.pop()

    stack.push(')')
    if (tmp[tmp.length - 1] === '(') {
      tmp.pop()
      generator(num, stack, tmp)
      tmp.push('(')
    } else {
      tmp.push(')')
      generator(num, stack, tmp)
      tmp.pop()
    }
    stack.pop()
  }

  generator(2 * n, stack, tmp)
  return res
}

export default generateParenthesis

/*****************************************************************************************************************************************************
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
