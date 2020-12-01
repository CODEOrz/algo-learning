function fn(arr) {
  var tempArr = Array.from(arr.join('-'));  //join()会自动添加逗号
  for (var i = 0; i < tempArr.length; i++) {
    if (isNaN(tempArr[i])) {
      tempArr.splice(i, 1)
    }
  }
  return tempArr;
}


function fn(arr) {
  var myArr = [];
  var fn2 = function (arr2) {
    for (var i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        fn2.call(null, arr2[i])
      }
      else {
        myArr.push(arr2[i]);
      }
    }
  }
  fn2(arr);
  return myArr;
}


const res = fn([1, 2, 3, [4, 5, [6, 7]]]);
console.log(res)