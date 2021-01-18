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

Function.prototype.bind2 = function (context) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this
  var args = Array.prototype.slice.call(arguments, 1)

  var fNOOP = function () { } //这个时候，通过一个空函数来进行中转，避免直接修改 fBound.prototype 的时候，也会直接修改绑定函数的 prototype。

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return self.apply(this instanceof fNOOP ? this : context, args.concat(bindArgs))
  }

  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  fNOOP.prototype = this.prototype
  fBound.prototype = new fNOOP()
  return fBound
}

// var value = 2
// var foo = {
//   value: 1
// }

// function bar(name, age) {
//   this.habit = 'shopping'
//   console.log(this.value)
//   console.log(name)
//   console.log(age)
// }
// var bindFoo = bar.bind2(foo, 'daisy')
// var obj = bindFoo('18')