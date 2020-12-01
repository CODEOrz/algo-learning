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
  s = "abc"
  t = "piwebpiqrbaqoweuropqowiuropqwurcqwoeriu"

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

  // O(N)
  for (let i = 0; i < tLen; ++i) {
    const c = t[i]
    if (index[c] === undefined) index[c] = []
    index[c].push(i)
  }

  console.log(index)

  let j = 0
  for (let i = 0; i < sLen; ++i) {
    const c = s[i]
    if (index[c] === undefined) return false

    const pos = leftBound(index[c], j)
    console.log(`pos = ${pos}`)

    if (pos === index[c].length) { // 在二分查找中，没有找到目标元素
      return false
    }
    
    j = index[c][pos] + 1
    console.log(`j = ${j}`)
  }

  return true
}
// @lc code=end

