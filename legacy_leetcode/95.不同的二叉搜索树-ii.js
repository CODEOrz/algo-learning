/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }

  function generate(start, end) {
    if (start > end) {
      return [null]
    }
    
    let ans = []

    for (let i = start; i <= end; ++i) {
      let lefts = generate(start, i - 1) // 关键
      let rights = generate(i + 1, end)  // 关键

      for (let j = 0; j < lefts.length; ++j) {
        for (let k = 0; k < rights.length; ++k) {
          let root = new TreeNode(i)
          root.left = lefts[j]
          root.right = rights[k]
          ans.push(root)
        }
      }
    }

    return ans
  }

  if (n === 0) {
    return []
  }

  return generate(1, n)
}
// @lc code=end

