/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

/**
 * 解法一： 自己写的，用两个指针遍历两个字符串。带备忘录的递归。
 * 此解法时间复杂度高，因为
 * ###################################################################
 */

// var longestCommonSubsequence = function (s1, s2) {
//   let memo = new Map()

//   function dp(i, j) {
//     if (memo.has(`${i}-${j}`)) {
//       return memo.get(`${i}-${j}`)
//     }

//     if (i === -1 || j === -1) return 0

//     if (s1[i] === s2[j]) {
//       memo.set(`${i}-${j}`, dp(i - 1, j - 1) + 1)
//     } else {
//       memo.set(`${i}-${j}`,
//         Math.max(
//           dp(i, j - 1),
//           dp(i - 1, j))
//       )
//     }

//     return memo.get(`${i}-${j}`)
//   }
//   return dp(len_1 - 1, len_2 - 1)
// }

/**
 * 解法二： LeetCode优秀解法。DP Table解法？
 * 
 * ###################################################################
 */

var longestCommonSubsequence = function (s1, s2) {
  const len_1 = s1.length
  const len_2 = s2.length
  const dp = new Array(len_1 + 1)

  for (let i = 0; i <= len_1; ++i) {
    dp[i] = new Array(len_2 + 1).fill(0)
  }

  for (let i = 1; i <= len_1; ++i) {
    for (let j = 1; j <= len_2; ++j) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
      }
    }
  }

  return dp[len_1][len_2]
}

export default longestCommonSubsequence

/*****************************************************************************************************************************************************
[Question]
Given two strings s1 and s2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.



If there is no common subsequence, return 0.



Example 1:

Input: s1 = "abcde", s2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: s1 = "abc", s2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: s1 = "abc", s2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.


Constraints:

1 <= len_1 <= 1000
1 <= len_2 <= 1000
The input strings consist of lowercase English characters only.


[Comment]

********************************************************************************************************************************************************/
