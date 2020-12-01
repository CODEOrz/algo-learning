/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 解法一：
 * 88ms, 28.08%
 * 43.2MB, 100%
 */
var jump = function (nums) {
  function _findMaxRange(minRange, maxRange) {
     1
  }

  const n = nums.length
  if (n <= 1) return 0

  let ans = 0
  let minRange = 0
  let maxRange = 0

  while (maxRange < n - 1) {
    ++ans
    const temp = maxRange + 1
    maxRange = _findMaxRange(minRange, maxRange)
    minRange = temp
  }

  return ans
}

// 解法二： cpp, 时间复杂度与解法一相似，实际都需要计算所有元素对应的最远可达距离
// int jump(vector<int>& nums) {
//   int n = nums.size();
//   int end = 0, farthest = 0;
//   int jumps = 0;
//   for (int i = 0; i < n - 1; i++) {
//       farthest = max(nums[i] + i, farthest);
//       if (end == i) {
//           jumps++;
//           end = farthest;
//       }
//   }
//   return jumps;
// }
// @lc code=end

