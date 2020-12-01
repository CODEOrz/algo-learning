/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * 解法一: 中序遍历，检查结果列表是否已经有序
 */
// var isValidBST = function (root) {
//   function inOrder(root) {
//     if (root === null) return
//     inOrder(root.left)
//     inOrderResult.push(root.val)
//     inOrder(root.right)
//   }

//   let inOrderResult = []
//   inOrder(root)
//   if (inOrderResult.length <= 1) {
//     return true
//   } else {
//     for (let i = 0; i < inOrderResult.length - 1; ++i) {
//       if (inOrderResult[i] >= inOrderResult[i + 1]) return false
//     }
//     return true
//   }
// }

/**
 * 解法二: 分治法，判断左 MAX < 根 < 右 MIN
 */
var isValidBST = function (root) {
  function helper(root) {
    // 检查
    if (root === null) {
      return {
        isValid: true,
        max: null,
        min: null
      }
    }
    // 分
    const left = helper(root.left)
    const right = helper(root.right)
    // 合
    if (!left.isValid || !right.isValid) {
      return {
        isValid: false,
        max: null,
        min: null
      }
    }

    if (left.max !== null && left.max !== undefined) {
      if (left.max.val >= root.val) {
        return {
          isValid: false,
          max: null,
          min: null
        }
      }
    }

    if (right.min !== null && left.max !== undefined) {
      if (right.min.val <= root.val) {
        return {
          isValid: false,
          max: null,
          min: null
        }
      }
    }

    return {
      isValid: true,
      min: (left.min !== null && left.min !== undefined) ? left.min : root,
      max: (right.max !== null && right.max !== undefined) ? right.max : root,
    }
  }

  return helper(root).isValid
}
// @lc code=end

