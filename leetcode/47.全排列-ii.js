/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  function dfs(nums, size, depth, path, used, res) {
    if (depth === size) {
      res.push([...path])
      return
    }
    for (let i = 0; i < size; ++i) {
      if (!used[i]) {
        // 剪枝条件：i > 0 是为了保证 nums[i - 1] 有意义
        // 写 !used[i - 1] 是因为 nums[i - 1] 在深度优先遍历的过程中刚刚被撤销选择
        if (
          i > 0 &&
          nums[i] === nums[i - 1] &&
          used[i - 1] === false
        ) {
          continue
        }
        used[i] = true
        path.push(nums[i])
        dfs(nums, size, depth + 1, path, used, res)
        used[i] = false
        path.pop()
      }
    }
  }

  const size = nums.length
  if (size === 0) {
    return []
  }

  nums.sort((a, b) => a - b)

  let used = new Array(size).fill(false)
  let res = []

  dfs(nums, size, 0, [], used, res)
  return res
}
// @lc code=end

