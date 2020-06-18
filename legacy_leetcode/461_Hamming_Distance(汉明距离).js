/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

/**
 * 解法一: 使用HashMap
 * 60 ms, faster than 62.14%
 * 33.9 MB, less than 33.48%
 */

var hammingDistance = function (x, y) {
  let diffNum = x ^ y
  let count = 0
  while (diffNum !== 0) {
    diffNum = diffNum & (diffNum - 1)
    count++
  }
  return count
}

export default hammingDistance

/*****************************************************************************************************************************************************
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.


********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
