var pathSum = function (root, sum) {
  const count = (node, sum) => node === null
    ? 0
    : (node.val === sum) + count(node.left, sum - node.val) + count(node.right, sum - node.val)
  return root === null
    ? 0
    : count(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}