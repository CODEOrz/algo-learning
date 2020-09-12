// ES5

// 利用数组的indexOf

let a = [112, 112, 34, '你好', 112, 112, 34, '你好', 'str', 'str1']
function unique(array) {
  return array.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
}
console.log(unique(a))

// ES6

var arr = [112, 112, 34, '你好', 112, 112, 34, '你好', 'str', 'str1'];
var unique = (arr) => {
  return [...new Set(arr)]
}
console.log(unique(arr))


