function Promise(fn) {
    this.callbackFunctions = []

    const resolve = (value) => {
        setTimeout(() => {
            this.data = value
            this.callbackFunctions.forEach((callback) => callback(value))
        })
    }

    fn(resolve)
}

Promise.prototype.then = function () {
    return new Promise((resolve) => {
        this.callbackFunctions.push(() => {
            const res = onResolved(this.data)
            if (res instanceof Promise) {
                res.then(resolve)
            } else {
                resolve(res)
            }
        })
    })
}

/** 示例 */

new Promise((resolve) => {
    setTimeout(() => {
        resolve(1)
    }, 500)
})
    .then((res) => {
        console.log(res)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(2)
            }, 500)
        })
    })
    .then(console.log)
