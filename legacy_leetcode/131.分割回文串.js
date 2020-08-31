/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
/**
 * 解法一：
 */
var partition = function (s) {
  function isPalindrome(s) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] != s[s.length - 1 - j]) {
        return false
      }
    }
    return true
  }

  function partitionHelper(strArr, index) {
    if (index >= strLen) {
      res.push([...strArr])
      return
    }
    let tempStr = ''
    for (let i = index; i < strLen; ++i) {
      tempStr += s[i]
      if (isPalindrome(tempStr)) {
        strArr.push(tempStr)
        partitionHelper(strArr, i + 1)
        strArr.pop()
      }
    }
  }

  const strLen = s.length
  const res = []
  partitionHelper([], 0)
  return res
}
// @lc code=end

