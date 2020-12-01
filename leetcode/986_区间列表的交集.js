/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

/** 解法一
 *  
 */
// var intervalIntersection = function (A, B) {
//   let rangeSet = []
//   let res = []
//   A.forEach(i => rangeSet.push(i))
//   B.forEach(i => rangeSet.push(i))

//   if (rangeSet.length <= 1) return []

//   rangeSet.sort((a, b) => a[0] - b[0])

//   let rightBorder = rangeSet[0][1]
//   for (let i = 1; i < rangeSet.length; ++i) {
//     if (rangeSet[i][0] < rightBorder) {
//       if (rangeSet[i][1] < rightBorder) {
//         res.push(rangeSet[i])
//       }
//       if (rangeSet[i][1] >= rightBorder) {
//         res.push([rangeSet[i][0], rightBorder])
//         rightBorder = rangeSet[i][1]
//       }
//     } else if (rangeSet[i][0] === rightBorder) {
//       res.push([rightBorder, rightBorder])
//       rightBorder = rangeSet[i][1]
//     } else {
//       rightBorder = rangeSet[i][1]
//     }
//   }

//   return res
// }

/** 解法二
 *  
 */
var intervalIntersection = function (A, B) {
  let [i, j] = [0, 0]
  let res = []

  while (i < A.length && j < B.length) {
    let [a1, a2] = [A[i][0], A[i][1]]
    let [b1, b2] = [B[j][0], B[j][1]]

    if (b2 >= a1 && a2 >= b1) {
      res.push([Math.max(a1, b1), Math.min(a2, b2)])
    }
    if (b2 < a2) {
      ++j
    } else {
      ++i
    }
  }

  return res
}
// @lc code=end

