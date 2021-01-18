// 1.创建一个空对象; 
// 2.设置创建对象的__proto__属性的值为构造函数的prototype属性的值; 
// 3.将第一步创建的空对象作为this的上下文,执行构造函数代码; 
// 如果构造函数没有返回对象,那么返回this

function create() {
  var obj = new Object() // 创建一个空的对象
  var Con = [].shift.call(arguments)  // 获得构造函数，arguments中去除第一个参数
  obj.__proto__ = Con.prototype  // 链接到原型，obj 可以访问到构造函数原型中的属性
  return ret instanceof Object ? ret : obj  // 优先返回构造函数返回的对象
}


// new操作符做了这些事：

// 它创建了一个全新的对象。
// 它会被执行 [[Prototype]]（也就是 __proto__）链接。
// 它使 this指向新创建的对象。。
// 通过 new创建的每个对象将最终被 [[Prototype]]链接到这个函数的 prototype对象上。
// 如果函数没有返回对象类型 Object(包含 Functoin,Array,Date,RegExg,Error)，那么 new表达式中的函数调用将返回该对象引用。

function New(func) {
  var res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return res;
}

// 第二种实现
function New() {
  var obj = new Object()
  Constructor = [].shift.call(arguments)
  obj.__proto__ = Constructor.prototype
  var ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}


function Person(name) {
  this.name = name;
  if (typeof this.getName != "function") {
      Person.prototype = {
          constructor: Person,
          getName: function () {
              console.log(this.name);
          }
      }
  }
}

var person1 = new Person('kevin');
// 注释掉上面的代码，这句是可以执行的。
person1.getName();