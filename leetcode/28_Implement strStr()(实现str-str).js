/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

/**
 * 解法一:
 * JS内置函数解法，无太大意义
 */
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle)
// };


/**
 * 解法二:
 * KMP算法
 */
const strStr = (txt, pat) => {
  txt = 'ababddasfdababc'
  pat = 'abababc'

  let dp = []

  const KMP = (pat) => {
    const pLen = pat.length
    for (let i = 0; i <= pLen; ++i) {
      dp.push(new Array(256).fill(0)) // dp[当前状态][字符] = 下个状态
    }
    dp[0][pat.charCodeAt(0)] = 1 // 启动

    let X = 0 // “影子状态”，重启状态机的关键
    for (let j = 1; j < pLen; ++j) {
      for (let c = 0; c < 256; ++c) {
        if (pat.charCodeAt(j) === c) {
          dp[j][pat.charCodeAt(j)] = j + 1
        } else {
          dp[j][c] = dp[X][c]
        }
      }
      X = dp[X][pat.charCodeAt(j)] // 根据当前Pattern所在字符，决定影子状态的更改
    }
  }

  const search = txt => {
    const pLen = pat.length
    const tLen = txt.length

    let j = 0 // 状态机的状态
    for (let i = 0; i < tLen; ++i) {
      j = dp[j][txt.charCodeAt(i)] // i是当前扫描到的txt串的位置
      if (j === pLen) return i - pLen + 1 // 状态机完成，匹配成功，返回索引值
    }

    return -1
  }

  if (pat === '') return 0

  KMP(pat)
  return search(txt)
}
// @lc code=end
