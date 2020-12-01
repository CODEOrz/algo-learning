// 解法一：Hash表解法
// var findRepeatNumber = function (nums) {
//   function isNegativeZero(num) {
//     return num === 0 && (1 / num < 0)
//   }

//   if (nums.length <= 1) {
//     return
//   }
//   for (let i = 0; i < nums.length; ++i) {
//       console.log(nums)
//     if (nums[nums[i]] < 0 || isNegativeZero(nums[nums[i]])) {
//       return nums[i]
//     } else {
//       nums[nums[i]] *= -1
//     }
//   }
// }

// 解法二：搜索，交换元素，使列表的索引值和值一一对应
var findRepeatNumber = function (nums) {

}
