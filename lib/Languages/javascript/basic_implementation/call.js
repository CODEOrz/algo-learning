// ES3：

Function.prototype.call = function (context) {
  context = context ? Object(context) : window  // 设置当前上下文，若Call的第一个参数为null，这将this指向Window
  context.fn = this

  var args = []
  for (var i = 1, len = arguments.length; i < len; i++) { // 提取参数
    args.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + args + ')') // 用ES3支持的eval函数，拼接待执行函数

  delete context.fn 
  return result // 返回结果
}

// ES6：

Function.prototype.call = function (context) {
  context = context ? Object(context) : window;
  context.fn = this;

  let args = [...arguments].slice(1);
  let result = context.fn(...args);

  delete context.fn
  return result;
}
