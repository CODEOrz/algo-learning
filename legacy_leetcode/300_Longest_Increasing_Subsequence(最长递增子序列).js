// 解法1: 动态规划解法

var lengthOfLIS = function (nums) {
  let dp = Array.apply(null, { length: nums.length }).map(i => 1)

  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }

  let res = 0
  for (let i = 0; i < dp.length; ++i) {
    res = Math.max(res, dp[i])
  }
  return res
}

// 解法2: 二分查找解法

// var lengthOfLIS = function (nums) {};

// export default lengthOfLIS;

/*****************************************************************************************************************************************************
[question]
Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?

[comment]

********************************************************************************************************************************************************/
