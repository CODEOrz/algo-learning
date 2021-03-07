// 寄生组合式继承

// 一般只建议写这种，因为其它方式的继承会在一次实例中调用两次父类的构造函数或有其它缺点。

// 核心实现是：用一个 F 空的构造函数去取代执行了 Parent 这个构造函数。

function Parent(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

Parent.prototype.getName = function () {
  console.log(this.name)
}

function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}

// 关键的三步
var F = function () { }

F.prototype = Parent.prototype

Child.prototype = new F()





/**
 * 封装后的
 */

// function Parent(name) {
//   this.name = name
//   this.colors = ['red', 'blue', 'green']
// }

// Parent.prototype.getName = function () {
//   console.log(this.name)
// }

// function Child(name, age) {
//   Parent.call(this, name)
//   this.age = age
// }

function object(o) {
  function F() { }
  F.prototype = o
  return new F()
}

function prototype(child, parent) {
  var prototype = object(parent.prototype)
  prototype.constructor = child
  child.prototype = prototype
}

// 当我们使用的时候
prototype(Child, Parent)