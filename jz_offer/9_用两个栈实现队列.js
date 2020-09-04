var CQueue = function () {
  this.pushStack = []
  this.popStack = []
}

CQueue.prototype.appendTail = function (value) {
  while (this.popStack.length > 0) {
    this.pushStack.push(this.popStack.pop())
  }
  this.pushStack.push(value)
  while (this.pushStack.length > 0) {
    this.popStack.push(this.pushStack.pop())
  }
}

CQueue.prototype.deleteHead = function () {
  if (this.popStack.length === 0) {
    return -1
  } else {
    return this.popStack.pop()
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */