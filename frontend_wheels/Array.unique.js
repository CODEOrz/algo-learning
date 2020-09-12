Array.prototype.distinct = Array.prototype.distinct || function () {
  var len = this.length,
    i = 0,
    hash = {},
    myArr = [];
  for (; i < len; i++) {
    if (!hash[this[i]]) {
      hash[this[i]] = true;
      myArr.push(this[i])
    }
  }
  return myArr;
}

