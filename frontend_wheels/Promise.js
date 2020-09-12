// 核心功能：

// new Promise(fn) 其中 fn 只能为函数，且要立即执行
// promise.then(success, fail)中的 success 是函数，且会在 resolve 被调用的时候执行，fail 同理
// 实现思路：

// then(succeed, fail) 先把成功失败回调放到一个回调数组 callbacks[] 上
// resolve() 和 reject() 遍历 callbacks
// resolve() 读取成功回调 / reject() 读取失败回调，并异步执行 callbacks 里面的成功和失败回调（放到本轮的微任务队列中）


class Promise2 {
  state = "pending";
  callbacks = [];
  constructor(fn) {
    if (typeof fn !== "function") {
      throw new Error("must pass function");
    }
    fn(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(result) {
    if (this.state !== "pending") return;
    this.state = "fulfilled";
    nextTick(() => {
      this.callbacks.forEach((handle) => {
        if (typeof handle[0] === "function") {
          handle[0].call(undefined, result);
        }
      });
    });
  }
  reject(reason) {
    if (this.state !== "pending") return;
    this.state = "rejected";
    nextTick(() => {
      this.callbacks.forEach((handle) => {
        if (typeof handle[1] === "function") {
          handle[1].call(undefined, reason);
        }
      });
    });
  }
  then(succeed, fail) {
    const handle = [];
    if (typeof succeed === "function") {
      handle[0] = succeed;
    }
    if (typeof fail === "function") {
      handle[1] = fail;
    }
    this.callbacks.push(handle);
  }
}

function nextTick(fn) {
  if (process !== undefined && typeof ProcessingInstruction.nextTick === "function") {
    return process.nextTick(fn);
  } else {
    // 用MutationObserver实现浏览器上的nextTick
    var counter = 1;
    var observer = new MutationObserver(fn);
    var textNode = document.createTextNode(String(counter));

    observer.observe(textNode, {
      characterData: true,
    });
    counter += 1;
    textNode.data = String(counter);
  }
}