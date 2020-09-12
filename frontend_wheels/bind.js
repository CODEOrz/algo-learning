// 初级：ES6 新语法 const/...
function bind_1(asThis, ...args) {
  const fn = this; // 这里的 this 就是调用 bind 的函数 func
  return function (...args2) {
    return fn.apply(asThis, ...args, ...args2);
  }
}


// 中级 bind
// 优点：兼容 IE
// 缺点：参数要用Array.prototype.slice 取，复杂且不支持 new

// 中级：兼容 ES5
function bind_2(asThis) {
  var slice = Array.prototype.slice;
  var args = slice.call(arguments, 1);
  var fn = this;
  if (typeof fn !== "function") {
    throw new Error("cannot bind non_function");
  }
  return function () {
    var args2 = slice.call(arguments, 0);
    return fn.apply(asThis, args.concat(args2));
  };
}


// 高级：支持 new，例如 new (funcA.bind(thisArg, args))
function bind_3(asThis) {
  var slice = Array.prototype.slice;
  var args1 = slice.call(arguments, 1);
  var fn = this;
  if (typeof fn !== "function") {
    throw new Error("Must accept function");
  }
  function resultFn() {
    var args2 = slice.call(arguments, 0);
    return fn.apply(
      resultFn.prototype.isPrototypeOf(this) ? this : asThis, // 用来绑定 this
      args1.concat(args2)
    );
  }
  resultFn.prototype = fn.prototype;
  return resultFn;
}