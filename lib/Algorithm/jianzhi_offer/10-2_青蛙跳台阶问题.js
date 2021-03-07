var numWays = function (n) {
  let a = 1
  let b = 1
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return a;
}