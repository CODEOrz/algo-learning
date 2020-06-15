// 解法一
// var canPartition = function (nums) {
//   const N = nums.length
//   if (N === 0) {
//     return false
//   }

//   let W = eval(nums.join('+'))
//   if ((W & 1) === 1) {
//     return false
//   }
//   const HALF = W / 2

//   let dp = []
//   for (let i = 0; i <= N; ++i) {
//     dp.push(Array.apply(null, { length: HALF + 1 }).map(() => 0));
//   }
// };

// 解法二
var canPartition = function (nums) {
  let sum = 0
  for (let num of nums) {
    sum += num
  }
  if ((sum & 1) === 1) {
    return false
  }

  sum /= 2

  let dp = new Array(sum + 1).fill(false)
  dp[0] = true

  for (let num of nums) {
    let flag = true
    for (let j = sum; j >= num; --j) {
      dp[j] = dp[j] || dp[j - num]   /* ( 不选num / 选择num  ) */
      if (flag && dp[j]) {
        return true
      }
      flag = false
    }
  }
  return false
}

export default canPartition

/*****************************************************************************************************************************************************
[Question]
Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.
 

Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.


[Comment]
状态转移方程: dp[i] = dp[i] || dp[i-num]
Base Case  : dp[0] = true

dp[i] 表示是否能从num之前的数中，凑出和为i的情况
********************************************************************************************************************************************************/
