/**
 * 解法一
 *
 */
var maxCoins = function (nums) {
  // Define the 0 and 'n+1' "virtual balloon" with 1.
  nums.push(1)
  nums.unshift(1)
  const len = nums.length

  let dp = []
  for (let i = 0; i < len; ++i) {
    dp[i] = new Array(len).fill(0)
  }

  for (let i = len - 2; i >= 0; --i) {
    for (let j = i + 1; j < len; ++j) {
      for (let k = i + 1; k < j; ++k) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k] + dp[k][j] + nums[i] * nums[k] * nums[j]
        )
      }
    }
  }
  return dp[0][len - 1]
}

export default maxCoins

/*****************************************************************************************************************************************************
[Question]
Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note:

You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
Example:

Input: [3,1,5,8]
Output: 167
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

[Comment]

********************************************************************************************************************************************************/
