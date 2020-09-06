/**
 * 解法一：不符合要求的解法
 */
// var printNumbers = function (n) {
//   var a = '9'
//   var arr = []
//   for (let i = 1; i < n; i++) {
//     a += 9
//   }
//   console.log(a)
//   for (let i = 1; i <= a; i++) {
//     arr.push(i)
//   }
//   return arr
// }

/**
 * 解法二： 使用全排列的标准解法，注意：在JS中，会超出Array大小限制
 */
var printNumbers = function (n) {
  function arrToStr(numArr) {
    while (numArr[0] === 0) {
      numArr.shift()
    }
    return numArr.join('')
  }

  function printRecursively(currNum, index) {
    if (index === n - 1) {
      let str = arrToStr(currNum)
      if (str !== '') {
        ans.push(arrToStr(currNum))
      }
      return
    }
    for (let i = 0; i < 10; ++i) {
      currNum[index + 1] = i
      printRecursively(currNum, index + 1)
    }
  }

  if (n <= 0) {
    return
  }

  let currNum = new Array(n).fill(0)
  let ans = []

  for (let i = 0; i < 10; ++i) {
    currNum[0] = i
    printRecursively(currNum, 0)
  }

  return ans
}