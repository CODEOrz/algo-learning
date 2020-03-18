/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0
  let right = 0
  let start = 0
  let windowLength = Infinity
  let match = 0
  let tMap = new Map()
  let winMap = new Map()
  let sArr = s.split('')
  let tArr = t.split('')

  tArr.forEach(i => { tMap.set(i, (tMap.has(i) ? tMap.get(i) + 1 : 1))})
  tArr.forEach(i => { winMap.set(i, 0) })

  while (right < sArr.length) {
    const char1 = sArr[right]
    if (tMap.has(char1)) {
      winMap.set(char1, winMap.get(char1) + 1)
      if (winMap.get(char1) === tMap.get(char1)) ++match
    }
    ++right

    while (match === tMap.size) {
      if (right - left < windowLength) {
        start = left
        windowLength = right - left
      }
      const char2 = sArr[left]
      if (tMap.has(char2)) {
        winMap.set(char2, winMap.get(char2) - 1)
        if (winMap.get(char2) < tMap.get(char2)) --match
      }
      ++left
    }
  }
  return windowLength === Infinity ? '' : sArr.splice(start, windowLength).join('')
}

export default minWindow


/*****************************************************************************************************************************************************
[question]
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.


[comment]
1. 构建目标集Map
2. 设立start , windowLength用于记录最小字串位置
3. 先找包含目标集的解，然后求局部最优解，不断迭代，最后得到全局最优解
********************************************************************************************************************************************************/