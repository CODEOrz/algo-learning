/**
 * @param {string} s
 * @return {number}
 */

// 解法1
// var lengthOfLongestSubstring = function (s) {
//   if (s.length <= 1) { return s.length }

//   let left = 0
//   let right = 0
//   let max = 1
//   let flag = 0
//   let arr = s.split('')
//   let winMap = new Map()

//   winMap.set(arr[0], 1)
//   while (right < s.length) {
//     while (flag === 0 && right < s.length) {
//       if (right - left + 1 > max) {
//         max = right - left + 1
//       }
//       ++right
//       const cR = arr[right]
//       winMap.set(cR, winMap.has(cR) ? winMap.get(cR) + 1 : 1)
//       if (winMap.get(cR) === 2) { ++flag }
//     }

//     const cL = arr[left]
//     winMap.set(cL, winMap.get(cL) - 1)
//     if (winMap.get(cL) === 1) { --flag }

//     ++left
//     ++right

//     const cR = arr[right]
//     winMap.set(cR, winMap.has(cR) ? winMap.get(cR) + 1 : 1)
//     if (winMap.get(cR) === 2) { ++flag }
//   }

//   return max
// }


// 解法2 (几乎一致的空间与时间复杂度，但是代码可读性高更高，逻辑更清晰)
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) { return s.length }

  let left = 0
  let right = 0
  let max = 1
  let arr = s.split('')
  let winMap = new Map()

  while (right < arr.length) {
    const cR = arr[right]
    winMap.set(cR, winMap.has(cR) ? winMap.get(cR) + 1 : 1)
    ++right
    while (winMap.get(cR) > 1) {
      const cL = arr[left]
      winMap.set(cL, winMap.get(cL) - 1)
      ++ left
    }
    max = Math.max(max, right - left)
  }

  return max
}

export default lengthOfLongestSubstring

/*****************************************************************************************************************************************************
[question]
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

[comment]

********************************************************************************************************************************************************/