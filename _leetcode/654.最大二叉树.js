/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

function TreeNode(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
}

const findIndexOfMaxNumInArray = (targetArray, startIndex, endIndex) => {
    let maxNum = -Infinity
    let indexOfMaxNum = -1
    for (let i = startIndex; i <= endIndex; ++i) {
        if (targetArray[i] > maxNum) {
            maxNum = targetArray[i]
            indexOfMaxNum = i
        }
    }
    return indexOfMaxNum
}

const constructHelper = (array, startIndex, endIndex) => {
    if (startIndex > endIndex) {
        return null
    }
    if (startIndex === endIndex) {
        return new TreeNode(array[startIndex])
    }
    const indexOfCurrentMaxNum = findIndexOfMaxNumInArray(array, startIndex, endIndex)
    const node = new TreeNode(array[indexOfCurrentMaxNum])
    node.left = constructHelper(array, startIndex, indexOfCurrentMaxNum - 1)
    node.right = constructHelper(array, indexOfCurrentMaxNum + 1, endIndex)
    return node
}

const constructMaximumBinaryTree = (nums) => {
    if (!nums || nums.length <= 0) {
        return null
    }
    return constructHelper(nums, 0, nums.length - 1)
}
