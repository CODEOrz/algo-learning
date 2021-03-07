/**
 * @param {number} n
 * @return {number}
 */

var arrangeCoins = function (n) {
  if (n === 0) return 0
  if (n === 1) return 1
  for (let i = 2; i <= n; i++) {
    let product = (i * i + i) / 2
    if (product === n) {
      return i
    } else if (product > n) {
      return i - 1
    }
  }
}

console.log(arrangeCoins(9))