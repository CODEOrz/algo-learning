/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let sArr = s.split('')
  let nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let stack = []
  let temp = []

  while (sArr.length !== 0) {
    const curr = sArr.shift()
    if (curr === ']') {
      let back = ''
      while (back !== '[') {
        back = stack.pop()
        if (back !== '[') {
          temp.push(back)
        }
      }

      let multiFactorArr = []
      while (nums.includes(stack[stack.length - 1])) {
        multiFactorArr.unshift(stack.pop())
      }
      let multiFactor = parseInt(multiFactorArr.join(''))

      // 倍乘
      const orinTempLen = temp.length
      for (let i = multiFactor; i > 1; --i) {
        for (let j = 0; j < orinTempLen; ++j) {
          temp.push(temp[j])
        }
      }
      while (temp.length !== 0) {
        stack.push(temp.pop())
      }
    } else {
      stack.push(curr)
    }
  }

  return stack.join('')
}
// @lc code=end

