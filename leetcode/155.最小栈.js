/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.data = []
  this.min = []
}

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const min = this.getMin()
  this.min[this.min.length] = x < min ? x : min
  this.data[this.data.length] = x
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.data.length === 0) {
    return 
  }
  this.min.splice(this.min.length - 1, 1)
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
MinStack.prototype.getMin = function () {
  if (this.min.length === 0) {
    return Infinity
  }
  return this.min[this.min.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

