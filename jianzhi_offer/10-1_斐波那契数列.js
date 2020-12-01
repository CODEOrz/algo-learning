var fib = function (n) {
  let a = 0 
  let b = 1 // 斐波那契第1项
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum = (a + b) % 1000000007;  // 斐波拉契第2项
    a = b;
    b = sum;
  }
  return a;
}