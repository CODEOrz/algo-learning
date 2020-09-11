/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = []
  this.minStack = []
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const min = this.min()
  this.minStack[this.minStack.length] = x < min ? x : min
  this.data[this.data.length] = x
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.data.length === 0) {
    return 
  }
  this.minStack.splice(this.minStack.length - 1, 1)
  return this.data.splice(this.data.length - 1, 1)
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.data.length === 0) {
    return null
  }
  return this.data[this.data.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  if (this.minStack.length === 0) {
    return Infinity
  }
  return this.minStack[this.minStack.length - 1]
}
