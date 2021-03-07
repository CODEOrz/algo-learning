/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 解法一： 使用HashMap,时间和空间复杂度均不是最好的
 */
// var singleNumber = function (nums) {
//   let hashMap = new Map()
//   nums.forEach(i => {
//     if (hashMap.has(i)) {
//       hashMap.set(i, hashMap.get(i) + 1)
//     } else {
//       hashMap.set(i, 1)
//     }
//   })

//   for (let [key, value] of hashMap) {
//     if (value === 1) {
//       return key
//     }
//   }
// }

/**
 * 解法二： 
 */

var singleNumber = function (nums) {
  let [seen_once, seen_twice] = [0, 0]

  // 位掩码 seen_once 仅保留出现一次的数字，不保留出现三次的数字。
  // https://leetcode-cn.com/problems/single-number-ii/solution/zhi-chu-xian-yi-ci-de-shu-zi-ii-by-leetcode/
  
  nums.forEach(num => {
    console.log('-----------------------------------------')

    console.log(seen_once)
    seen_once = ~seen_twice & (seen_once ^ num)
    console.log(seen_once)
    
    console.log('####################')

    console.log(seen_twice)
    seen_twice = ~seen_once & (seen_twice ^ num)
    console.log(seen_twice)
  })

  return seen_once
}
// @lc code=end

