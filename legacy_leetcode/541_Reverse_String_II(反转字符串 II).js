/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const reverse = (s, start, end) => {
    while (start < end) {
      const temp = s[end]
      s[end] = s[start]
      s[start] = temp
      ++start
      --end
    }
  }

  let arr = s.split('')
  let left = 0
  let right = k - 1
  let flag = true
  while (flag) {
    if (right >= arr.length) {
      flag = false
      right = arr.length - 1
    }
    reverse(arr, left, right)
    left += 2 * k
    right += 2 * k
  }
  return arr.join('')
}

export default reverseStr


/*****************************************************************************************************************************************************
[question]
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string.
If there are less than k characters left, reverse all of them.
If there are less than 2k but greater than or equal to k characters,
then reverse the first k characters and left the other as original.

Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]


[comment]
双指针运用问题
********************************************************************************************************************************************************/