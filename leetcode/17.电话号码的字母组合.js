/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  function combination(currComb, index) {
    if (currComb.length === len) {
      res.push([...currComb].join(''))
      return
    }

    const currChar = digits[index]

    for (let i = 0; i < digitCharMap[currChar].length; ++i) {
      currComb.push(digitCharMap[digits[index]][i])
      combination(currComb, index + 1)
      currComb.pop()
    }
  }

  const digitCharMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  if (digits === '') {
    return []
  }

  const len = digits.length
  const res = []
  combination([], 0)
  return res
}
// @lc code=end

