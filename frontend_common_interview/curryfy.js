// 在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。
// 函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。

// 7.1 通用版
function curry() {
  var args = Array.prototype.slice.call(arguments);
  var fn = function () {
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    return multi.apply(this, newArgs);
  }
  fn.toString = function () {
    return args.reduce(function (a, b) {
      return a * b;
    })
  }
  return fn;
}
function multiFn(a, b, c) {
  return a * b * c;
}
var multi = curry(multiFn);

multi(2)(3)(4);
multi(2, 3, 4);
multi(2)(3, 4);
multi(2, 3)(4);


// 7.2 ES6
const curry = (fn, arr = []) => (...args) => (
  arg => arg.length === fn.length
    ? fn(...arg)
    : curry(fn, arg)
)([...arr, ...args])