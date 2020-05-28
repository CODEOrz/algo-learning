/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// 解法一: 带备忘录的递归解法
// var minDistance = function (s1, s2) {
//   let memo = new Map()

//   function dp(i, j, mode = '初始化') {
//     console.log(`i = ${i}  j = ${j}`)
//     console.log(mode)

//     if (memo.has(`${i}-${j}`)) {
//       return memo.get(`${i}-${j}`)
//     }

//     if (i === -1) return j + 1
//     if (j === -1) return i + 1

//     if (s1[i] === s2[j]) {
//       memo.set(`${i}-${j}`, dp(i - 1, j - 1, '相等'))
//     } else {
//       memo.set(
//         `${i}-${j}`,
//         Math.min(
//           dp(i, j - 1, '插入') + 1, // 插入
//           dp(i - 1, j, '删除') + 1, // 删除
//           dp(i - 1, j - 1, '替换') + 1 // 替换
//         )
//       )
//     }

//     console.log(memo)
//     return memo.get(`${i}-${j}`)
//   }

//   return dp(s1.length - 1, s2.length - 1)
// }

// 解法二: DP Table解法，涉及到字符串转换的，最好使用这种解法。
var minDistance = function (s1, s2) {
  const len_1 = s1.length
  const len_2 = s2.length

  let dp = new Array(len_1 + 1)
  for (let i = 0; i <= len_1; ++i) {
    dp[i] = new Array(len_2 + 1).fill(0)
  }

  //base case
  for (let i = 1; i <= len_1; ++i) {
    dp[i][0] = i
  }
  for (let i = 1; i <= len_2; ++i) {
    dp[0][i] = i
  }

  for (let i = 1; i <= len_1; ++i) {
    for (let j = 1; j <= len_2; ++j) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] // EQUAL
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // DELETE
          dp[i][j - 1] + 1, // INSERT
          dp[i - 1][j - 1] + 1 // REPLACE
        )
      }
    }
  }
  return dp[len_1][len_2]
}

export default minDistance

/*****************************************************************************************************************************************************
[Question]
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 

[Comment]
Base Case 是i,j为-1时，需要进行全插入/全删除时的操作步骤
状态转移方程为，对于当前状态，进行插入/删除/替换 的最小值。递归完成。
********************************************************************************************************************************************************/
