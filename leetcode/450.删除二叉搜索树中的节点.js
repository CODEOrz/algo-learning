/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {TreeNode} head
 * @param {number} key
 * @return {TreeNode}
 */

/**
 * 找到目标节点，然后搜索可替代值节点，然后在子树中递归删除该节点
 */

var deleteNode = function (head, key) {
  function successor(root) {
    root = root.right
    while (root.left !== null) {
      root = root.left
    }
    return root.val
  }

  function predecessor(root) {
    root = root.left
    while (root.right !== null) {
      root = root.right
    }
    return root.val
  }


  if (head === null) {
    return null
  }

  if (head.val > key) {
    head.left = deleteNode(head.left, key)
  } else if (head.val < key) {
    head.right = deleteNode(head.right, key)
  } else if (head.val === key) {
    if (head.left === null && head.right === null) {
      return null
    } else if (head.right !== null) {
      head.val = successor(head)
      head.right = deleteNode(head.right, head.val)
    } else {
      head.val = predecessor(head)
      head.left = deleteNode(head.left, head.val)
    }
  }

  return head
}
// @lc code=end

