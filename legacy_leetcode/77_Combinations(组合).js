/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

/**
 * 解法一，自己想的
 * 124 ms, faster than 57.14% 
 * 124 ms, faster than 57.14% 
 */

// var combine = function (n, k) {
//   let arr = []
//   for (let i = 0; i < n; ++i) {
//     arr.push(i + 1)
//   }

//   function combination(arr, num) {
//     if (1 === num--) {
//       return arr.map((i) => [i])
//     }
//     let res = []

//     while (arr.length >= num) {
//       const curr = arr.pop()
//       let result = combination([...arr], num)
//       for (let j = 0; j < result.length; ++j) {
//         result[j].push(curr)
//       }
//       res = res.concat(result)
//     }
//     return res
//   }

//   return combination(arr, k)
// }

/**
 * 解法二，DFS解法
 * 228 ms, faster than 18.61%
 * 45.2 MB, less than 12.23% 
 */

var combine = function (n, k) {
  let res = []
  if (k <= 0 || n <= 0) return res

  function backtrack(n, k, start, track) {
    if (k === track.length) {
      res.push(track)
      return
    }

    for (let i = start; i <= n; ++i) {
      track.push(i)
      backtrack(n, k, i + 1, [...track])
      track.pop()
    }
  }

  let track = []
  backtrack(n, k, 1, [...track])
  return res
}

export default combine

/*****************************************************************************************************************************************************
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

Example:

Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
