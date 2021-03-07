/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let memory = new Map()

  const dp = n => {
    if (memory.has(n)) {
      return memory.get(n)
    }
    if (n === 0) return 0
    if (n < 0) return -1
    let res = Number.POSITIVE_INFINITY
    for (let i = 0; i < coins.length; i++) {
      subProblem = dp(n - coins[i])
      if (subProblem === -1) continue
      res = Math.min(res, 1 + subProblem)
    }
    memory.set(n, res === Number.POSITIVE_INFINITY ? -1 : res)
    return memory.get(n)
  }

  return dp(amount)
}

// 画递归树： 主要理解 1 + subProblem 的意义


// 最佳解法： 应用了深度优先搜索
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (coins === null || coins.length === 0 || amount < 0) {
      return -1;
  }
  coins.sort((a, b) => b - a);
  const res = [Number.POSITIVE_INFINITY];
  dfs(coins, amount, res, 0, 0);

  return res[0] ===  Number.POSITIVE_INFINITY ? -1 : res[0];
};

const dfs = (coins, amount, res, index, temp) => {
  if (amount < 0 || temp > res[0] || index >= coins.length ) {
      return;
  }
  if (amount % coins[index] === 0) {
      res[0] = Math.min(res[0], temp + amount / coins[index]);
      return;
  }

  const length = Math.floor(amount/coins[index]);
  for (let i = length; i >= 0; i--) {
      if (temp + i > res[0] - 1) {
          break;
      }
      dfs(coins, amount - i * coins[index], res, index + 1, temp + i);
  }
}