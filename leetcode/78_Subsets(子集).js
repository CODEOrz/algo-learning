/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/**
 * 解法一
 */

var subsets = function (nums) {
  if (nums.length === 0) return [[]]

  let n = nums.pop()
  let res = subsets([...nums])

  const size = res.length
  for (let i = 0; i < size; ++i) {
    res.push([...res[i]])
    res[res.length - 1].push(n)
  }
  return res
}

export default subsets

/*****************************************************************************************************************************************************
Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
