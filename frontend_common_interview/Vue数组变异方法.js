const oldArrayProperty = Array.prototype;
const newArrayProperty = Object.create(oldArrayProperty);

['pop', 'push', 'shift', 'unshift', 'splice'].forEach((method) => {
  newArrayProperty[method] = function () {
    renderView();
    oldArrayProperty[method].call(this, ...arguments);
  };
});


module.exports = newArrayProperty
// 在observer函数中加入数组的判断，如果传入的是数组，则改变数组的原型对象为我们修改过后的原型。
// if (Array.isArray(target)) {
//   target.__proto__ = newArrayProperty;
// }