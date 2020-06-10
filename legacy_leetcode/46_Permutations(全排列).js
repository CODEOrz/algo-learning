/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
  let res = []

  function backtrack(nums, track) {
    if (track.length === nums.length) {
      res.push([...track])
      return
    }
    
    for (let i = 0; i < nums.length; ++i) {
      if (track.includes(nums[i])) {
        continue
      }
      track.push(nums[i]) 
      backtrack(nums, track)
      track.pop()
    }
  }

  let track = []
  backtrack(nums, track)
  return res
}

export default permute

/*****************************************************************************************************************************************************
[Question]
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]


********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
