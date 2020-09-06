/**
 * @param {string} s
 * @return {boolean}
 */


var isNumber = function (s) {
  function scanInt() {
    if (s[currIndex] === '+' || s[currIndex] === '-') {
      currIndex++
    }
    return scanUnsignedInt()
  }

  function scanUnsignedInt() {
    if (s[currIndex] && s[currIndex] !== undefined) {
      const beforeIdx = currIndex
      const charCodeOf0 = '0'.charCodeAt(), charCodeOf9 = '9'.charCodeAt()
      while (charCodeOf0 <= s[currIndex].charCodeAt() && s[currIndex].charCodeAt() <= charCodeOf9) {
        currIndex++
        if (currIndex === s.length) {
          break
        }
      }
      return currIndex > beforeIdx
    } else {
      return false
    }
  }

  s = s.split('')
  while (s[0] === ' ') {
    s.shift()
  }
  while (s[s.length - 1] === ' ') {
    s.pop()
  }

  if (s.length === 0) {
    return false
  }

  let currIndex = 0
  let numeric = scanInt()
  if (s[currIndex] === '.') {
    currIndex++
    numeric = scanUnsignedInt() || numeric
  }
  if (s[currIndex] === 'e' || s[currIndex] === 'E') {
    currIndex++
    numeric = numeric && scanInt()
  }

  return numeric && currIndex === s.length
}

