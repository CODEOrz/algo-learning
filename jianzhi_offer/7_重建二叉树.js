/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/**
 * 解法一： 此解法时间复杂度和空间复杂度均非最优
 */
// var buildTree = function (preorder, inorder) {
//   function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
//   }

//   function findIndexInUnduplicatedArray(arr, target) {
//     let index = -1
//     for (let i = 0; i < arr.length; ++i) {
//       if (arr[i] === target) {
//         index = i
//         break
//       }
//     }
//     return index
//   }


//   function builder(preOrder, inOrder) {
//     if (inOrder.length === 1) {
//       return new TreeNode(inOrder[0])
//     }
//     if (inOrder.length === 0) {
//       return null
//     }

//     let pivot = -1

//     const preOrderLength = preOrder.length
//     for (let i = 0; i <= preOrderLength; ++i) {
//       const index = findIndexInUnduplicatedArray(inOrder, preOrder.shift())
//       if (index !== -1) {
//         pivot = index
//         break
//       }
//     }

//     let node = new TreeNode(inOrder[pivot])
//     node.left = builder([...preOrder], inOrder.splice(0, pivot))
//     node.right = builder([...preOrder], inOrder.splice(1, inOrder.length - 1))
//     return node
//   }

//   return builder(preorder, inorder)
// }

/**
 * 解法二：标准解法, 此解法的关键在于，preOrder的起止点，
 */
var buildTree = function (preorder, inorder) {
  function TreeNode(val) {
    this.val = val
    this.left = this.right = null
  }

  function builder(preorderStart, preorderEnd, inorderStart, inorderEnd) {
    if (preorderStart > preorderEnd) {
      return null
    }
    let rootVal = preorder[preorderStart]
    let root = new TreeNode(rootVal)
    if (preorderStart === preorderEnd) {
      return root
    } else {
      let rootIndex = indexMap.get(rootVal)
      let leftNodes = rootIndex - inorderStart
      root.left = builder(preorderStart + 1, preorderStart + leftNodes, inorderStart, rootIndex - 1)
      root.right = builder(preorderStart + leftNodes + 1, preorderEnd, rootIndex + 1, inorderEnd)
      return root
    }
  }

  if (preorder == null || preorder.length == 0) {
    return null
  }
  let indexMap = new Map()
  for (let i = 0; i < inorder.length; ++i) {
    indexMap.set(inorder[i], i)
  }
  return builder(0, preorder.length - 1, 0, inorder.length - 1)
}
