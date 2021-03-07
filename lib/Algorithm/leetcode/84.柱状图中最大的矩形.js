/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
/**
 * 解法一： 对比所有矩形，找出最大值
 */
// var largestRectangleArea = function (heights) {
//   function search(index) {
//     let count = 1
//     if (index > 0) {
//       for (let i = index - 1; i >= 0; --i) {
//         if (heights[i] >= heights[index]) {
//           count ++
//         } else {
//           break
//         }
//       }
//     }
//     if (index < heights.length - 1) {
//       for (let i = index + 1; i < heights.length; ++i) {
//         if (heights[i] >= heights[index]) {
//           count ++
//         } else {
//           break
//         }
//       }
//     }
//     const res = count * heights[index]
//     // console.log(`index=${index} count=${count} currHeight=${heights[index]} res=${res}`)
//     return res
//   }

//   let ans = 0
//   for (let i = 0; i < heights.length; ++i) {
//     const currArea = search(i)
//     ans = Math.max(ans, currArea)
//   }

//   return ans
// }


/**
 * 解法二： 
 */
var largestRectangleArea = function (heights) {
  let stack = []
  let max = 0

  for (let i = 0; i <= heights.length; ++i) {
    let cur = null
    if (i == heights.length) {
      cur = 0
    } else {
      cur = heights[i]
    }

    while (stack.length !== 0 && cur <= heights[stack[stack.length - 1]]) {
      let pop = stack.pop()
      let h = heights[pop]
      let width = i
      if (stack.length !== 0) {
        let peek = stack[stack.length - 1]
        width = i - peek - 1
      }
      max = Math.max(max, h * width)
    }

    stack.push(i)
  }

  return max
}
// @lc code=end

