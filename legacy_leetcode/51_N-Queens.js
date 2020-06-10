/**
 * @param {number[]} nums
 * @return {number[][]}
 */

 /**
 * 解法一 
 * 224 ms, faster than 8.72%
 * 43.9 MB, less than 5.06%
 */

var solveNQueens = function (n) {
  let res = []

  function isTrackValid(track) {
    if (track.length <= 1) {
      return true
    }
    for (let i = 1; i < track.length; ++i) {
      const idxQ = track[i].indexOf('Q')
      for (let j = i - 1; j >= 0; --j) {
        if (track[j][idxQ - (i - j)] === 'Q' || track[j][idxQ + (i - j)] === 'Q') {
          return false
        }
      }
      for (let j = 0; j < i; ++j) {
        if (track[j][idxQ] === 'Q') {
          return false
        }
      }
    }
    return true
  }

  function backtrack(track) {
    if (track.length === n) {
      res.push([...track].map((i) => i.join('')))
      return
    }

    for (let i = 0; i < n; ++i) {
      let arr = new Array(n).fill('.')
      arr[i] = 'Q'

      track.push(arr)
      if (isTrackValid(track)) {
        backtrack([...track])
      }
      track.pop()
    }
  }

  let track = []
  backtrack(track)
  return res
}

export default solveNQueens

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
