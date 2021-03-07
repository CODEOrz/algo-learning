// ES3：
Function.prototype.apply = function (context, arr) {
  context = context ? Object(context) : window
  context.fn = this

  var result
  if (!arr) {
    result = context.fn()
  } else {
    var args = []
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context.fn(' + args + ')')
  }

  delete context.fn
  return result
}




// ES6：
Function.prototype.apply = function (context, arr) {
  context = context ? Object(context) : window
  context.fn = this

  let result
  if (!arr) {
    result = context.fn()
  } else {
    result = context.fn(...arr)
  }

  delete context.fn
  return result
}