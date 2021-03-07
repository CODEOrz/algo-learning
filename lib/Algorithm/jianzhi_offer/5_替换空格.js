/**
 * @param {string} s
 * @return {string}
 */
// 解法一：应用了内置方法 slice, 时间复杂度不是最优
// var replaceSpace = function (s) {
//   let currIndex = 0
//   while (s[currIndex] !== undefined) {
//     if (s[currIndex] === ' ') {
//       s = s.slice(0, currIndex) + '%20' + s.slice(currIndex + 1)
//       currIndex += 3
//     } else {
//       currIndex += 1
//     }
//   }
//   return s
// } 

// 解法二：应用了内置方法 slice, 时间复杂度不是最优
var replaceSpace = function (s) {
  s = s.split('')
  const sLength = s.length
  for (let i = 0; i < sLength; ++i) {
    if (s[i] === ' ') {
      s.push(' ')
      s.push(' ')
    }
  }
  const sNewLength = s.length
  let p1 = sLength - 1
  let p2 = sNewLength - 1
  while (p1 !== p2) {
    if (s[p1] === ' ') {
      s[p2] = '0'
      s[--p2] = '2'
      s[--p2] = '%'
    } else {
      s[p2] = s[p1]
    }
    p1--
    p2--
  }
  return s.join('')
}