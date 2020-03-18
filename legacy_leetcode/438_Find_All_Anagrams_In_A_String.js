/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function (s, t) {
  let left = 0
  let right = t.length - 1
  let matched = 0
  let answer = []
  let tMap = new Map()
  let winMap = new Map()
  let sArr = s.split('')
  let tArr = t.split('')

  tArr.forEach(i => { tMap.set(i, (tMap.has(i) ? tMap.get(i) + 1 : 1))})
  tArr.forEach(i => { winMap.set(i, 0) })

  for (let i = 0; i < t.length; ++i) {
    const c = sArr[i]
    if (tMap.has(c)) {
      winMap.set(c, winMap.get(c) + 1)
      if (winMap.get(c) === tMap.get(c)) {
        ++matched
      }
    }
  }

  while (right < s.length) {
    if (matched === tMap.size) {
      answer.push(left)
    }

    const cL = sArr[left]
    if (tMap.has(cL)) {
      winMap.set(cL, winMap.get(cL) - 1)
      if (winMap.get(cL) === tMap.get(cL) - 1) {
        --matched
      }
    }
      
    ++left
    ++right

    const cR = sArr[right]
    if (tMap.has(cR)) {
      winMap.set(cR, winMap.get(cR) + 1)
      if (winMap.get(cR) === tMap.get(cR)) {
        ++matched
      }
    }
  }

  return answer
}

export default findAnagrams

/*****************************************************************************************************************************************************
[question]
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".


[comment]
固定长的滑动指针，移动前判定left位置，移动后判定right位置
********************************************************************************************************************************************************/