// 解法一
var combinationSum4 = function (nums, target) {
  let dp = new Array(target + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= target; ++i) {
    for (let num of nums) {
      if (i >= num) {
        dp[i] += dp[i-num]
      }
    }
  }
  return dp[target]
}

export default combinationSum4

/*****************************************************************************************************************************************************
[Question]
Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
 

Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?

[Comment]

********************************************************************************************************************************************************/
