/**
 * @param {number[][]} envelopes
 * @return {number}
 */
/**
 * 解法一: 标准解法
 * 先排序，然后再用求LIS长度的二分查找确定最长递增子序列长度
 */

var maxEnvelopes = function (envelopes) {
  /**  use binary search to get the length of LIS */
  function lenOfLIS(arr) {
    let top = []
    let piles = 0

    for (let i = 0; i < arr.length; ++i) {
      let poker = arr[i]
      let left = 0
      let right = top.length - 1
      
      while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (top[mid] >= poker) {
          right = mid -1
        } else {
          left = mid + 1
        }
      }

      if (left === piles) piles++
      top[left] = poker
    }
    return piles
  }


  envelopes.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))
  console.log(lenOfLIS(envelopes.map(i => i[1])))
  return lenOfLIS(envelopes.map(i => i[1]))
}

export default maxEnvelopes

/*****************************************************************************************************************************************************
You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Note:
Rotation is not allowed.

Example:

Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3 
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
********************************************************************************************************************************************************
[Comment]



********************************************************************************************************************************************************/
