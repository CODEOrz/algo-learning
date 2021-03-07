const invertTree = (root) => {
    if (!root) return null
    const _left = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(_left)
    return root
}