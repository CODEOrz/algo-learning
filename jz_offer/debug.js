const Test = require('../common/unit_test')
/**
 * ##########################################################################
 */

var findRepeatNumber = function (nums) {
  function isNegativeZero(num) {
    return num === 0 && (1 / num < 0)
  }

  if (nums.length <= 1) {
    return
  }
  for (let i = 0; i < nums.length; ++i) {
    const currIdx = nums[i] < 0 ? -nums[i] : nums[i]
    if (nums[currIdx] < 0 || isNegativeZero(nums[currIdx])) {
      return currIdx
    } else {
      nums[currIdx] *= -1
    }
  }
}

/**
 * ##########################################################################
 */

const utCases = [
  {
    params: [1, 2, 3, 1],
    answer: 1
  },
]

Test(findRepeatNumber, utCases)
