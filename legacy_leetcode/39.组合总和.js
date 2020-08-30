/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  function combination(paths, sum, start, target) {
    if (sum > target) {
      return
    }
    if (sum === target) {
      res.push([...paths])
      return
    }

    // 剪枝：start表示只从比当前选取的Candidate大的位置开始执行
    // i = start 只允许当前位置以后的candidate参与计算
    for (let i = start; i < candidates.length; ++i) {
      paths.push(candidates[i])
      combination(paths, sum + candidates[i], i, target)
      paths.pop()
    }
  }

  candidates = candidates.sort((a, b) => a - b)

  const paths = []
  const res = []
  combination(paths, 0, 0, target)
  return res
}
// @lc code=end

