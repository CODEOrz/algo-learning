/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  function isValid(tempStr, currIdx, currSegs, currStr) {
    const leftLength = s.length - currIdx - 1
    const leftSegments = IP_SEGMENTS - currSegs - 1

    const isInRange = parseInt(tempStr) >= 0 && parseInt(tempStr) <= 255
    const exsistedPostZero = tempStr.length > 1 && tempStr[0] === '0'
    const canFinish = (leftLength >= leftSegments) && (leftLength <= (leftSegments * 3))

    // if (true) {
    //   console.log('++++++++++++++++++++++++++++++++++++++++++++')
    //   console.log(`已存在串=${currStr} 待拼接串=${tempStr} 当前位置=${currIdx} 剩余长度=${leftLength}  当前段数=${currSegs}  剩余段数=${leftSegments}`)
    //   console.log(isInRange)
    //   console.log(!exsistedPostZero)
    //   console.log(canFinish)
    //   console.log('++++++++++++++++++++++++++++++++++++++++++++')
    // }
    return isInRange && !exsistedPostZero && canFinish
  }

  function helper(ipStr, currIdx, currSegs) {
    if (currSegs === IP_SEGMENTS) {
      ans.push(ipStr)
      return
    }
    let tempStr = ''
    for (let i = currIdx; i < s.length; ++i) {
      tempStr += s[i]
      if (isValid(tempStr, i, currSegs, ipStr)) {
        helper(
          currSegs === 0 ? `${tempStr}` : `${ipStr}.${tempStr}`,
          i + 1,
          currSegs + 1
        )
      }
      if (tempStr.length >= 3) {
        break
      }
    }
  }

  const IP_SEGMENTS = 4

  const ans = []
  helper('', 0, 0)
  return ans
}
// @lc code=end

