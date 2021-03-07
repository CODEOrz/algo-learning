/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  function matches(s1Map, s2Map) {
    for (let i = 0; i < 26; ++i) {
      if (s1Map[i] !== s2Map[i]) {
        return false
      }
    }
    return true
  }

  if (s1.length > s2.length) {
    return false
  }
  
  let s1Map = new Array(26).fill(0)
  let s2Map = new Array(26).fill(0)

  for (let i = 0; i < s1.length; ++i) {
    s1Map[s1.charAt(i).charCodeAt() - 'a'.charCodeAt()]++
    s2Map[s2.charAt(i).charCodeAt() - 'a'.charCodeAt()]++
  }
  
  for (let i = 0; i < s2.length - s1.length; ++i) {
    if (matches(s1Map, s2Map)) {
      return true
    }
    s2Map[s2.charAt(i + s1.length).charCodeAt() - 'a'.charCodeAt()]++
    s2Map[s2.charAt(i).charCodeAt() - 'a'.charCodeAt()]--
  }

  return matches(s1Map, s2Map)
}
// @lc code=end

