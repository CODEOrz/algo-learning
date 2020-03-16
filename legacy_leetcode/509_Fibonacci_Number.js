/**
 * @param {number} N
 * @return {number}
 */

const calculate = (memory, n) => {
  console.log(n)
  console.log(memory.get(n) !== 0)
  if (n == 1 || n == 2) return 1
  if (memory.get(n) !== 0) return memory.get(n)
  memory.set(n, calculate(memory, n - 1) + calculate(memory, n - 2))
  return memory.get(n)
}

var fib = function (N) {
  if (N < 1) return 0
  let memory = new Map()
  for (let i = 0; i <= N; i++) {
    memory.set(i, 0)
  }
  const result = calculate(memory, N)
  console.log(memory)
  return result
}

console.log(fib(6))

// 递归执行顺序：先左后右，左树结点被记录以后，右树结点相同值不必重复计算