// 解法一
// var superEggDrop = function (K, N) {
//   let memo = {}

//   function dp(K, N) {
//     if (K === 1) return N
//     if (N === 0) return 0
//     if (memo[`${K}-${N}`]) {
//       return memo[`${K}-${N}`]
//     }

//     let res = Infinity

//     for (let i = 1; i <= N; ++i) {
//       res = Math.min(
//         res,
//         Math.max(
//           dp(K, N - i),
//           dp(K - 1, i - 1)
//         ) + 1
//       )
//     }

//     memo[`${K}-${N}`] = res
//     return res
//   }

//   return dp(K, N)
// };






// 解法二: DP表 2D

// var superEggDrop = function (K, N) {
//   let dp = []

//   for (let i = 0; i <= N; ++i) {
//     dp[i] = new Array(K + 1).fill(0)
//   }

//   for (let i = 1; i <= N; ++i) {
//     for (let j = 1; j <= K; ++j) {
//       dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + 1
//     }
//     if (dp[i][K] >= N) return i
//   }
// }





// 解法三: DP表 1D

// var superEggDrop = function (K, N) {
//   let dp = [0, 0]
//   let m = 0

//   while (dp[dp.length - 1] < N) {
//     for (let i = dp.length - 1; i > 0; --i) {
//       dp[i] += dp[i - 1] + 1
//     }
//     if (dp.length < (K + 1)) {
//       dp.push(dp[dp.length - 1])
//     }
//     m += 1
//   }

//   return m
// }





// 解法四
var superEggDrop = function (K, N) {
  let memo = new Map()

  function dp(K, N) {
    if (K === 1) return N
    if (N === 0) return 0
    if (memo.has(`${K}-${N}`)) {
      return memo.get(`${K}-${N}`)
    }

    let res = Infinity
    let low = 1
    let high = N

    while (low <= high) {
      let middle = Math.floor((low + high) / 2)
      let broken = dp(K - 1, middle - 1)
      let not_broken = dp(K, N - middle)

      if (broken > not_broken) {
        high = middle - 1
        res = Math.min(res, broken + 1)
      }
      else {
        low = middle + 1
        res = Math.min(res, not_broken + 1)
      }
    }
    memo.set(`${K}-${N}`, res)
    return res
  }

  console.log(dp(K, N))
  return dp(K, N)
}


export default superEggDrop

/*****************************************************************************************************************************************************
[Question]
You are given K eggs, and you have access to a building with N floors from 1 to N. 

Each egg is identical in function, and if an egg breaks, you cannot drop it again.

You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.

Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 

Your goal is to know with certainty what the value of F is.

What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

 

Example 1:

Input: K = 1, N = 2
Output: 2
Explanation: 
Drop the egg from floor 1.  If it breaks, we know with certainty that F = 0.
Otherwise, drop the egg from floor 2.  If it breaks, we know with certainty that F = 1.
If it didn't break, then we know with certainty F = 2.
Hence, we needed 2 moves in the worst case to know what F is with certainty.
Example 2:

Input: K = 2, N = 6
Output: 3
Example 3:

Input: K = 3, N = 14
Output: 4
 

Note:

1 <= K <= 100
1 <= N <= 10000


[Comment]

********************************************************************************************************************************************************/
