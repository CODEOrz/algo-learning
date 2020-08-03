/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  function leftBound(arr, target) {
    const len = arr.length
    let left = 0
    let right = len - 1

    while (right >= left) {
      let mid = Math.floor((left + right) / 2)
      if (arr[mid] >= target) {
        right = mid - 1 
      } else {
        left = mid + 1
      }
    }
    return left
  }
                                         
  const sLen = s.length
  const tLen = t.length
  let index = []

  for (let i = 0; i < tLen; ++i) {
    const c = t.charAt(i)
    if (index[c] === undefined) index[c] = []
    index[c].push(i)
  }

  let j = 0
  for (let i = 0; i < sLen; ++i) {
    const c = s.charAt(i)
    if (index[c] === undefined) return false
    const pos = leftBound(index[c], j)
    if (pos === index[c].length) return false
    j = index[c][pos] + 1
  }

  return true
}
// @lc code=end

