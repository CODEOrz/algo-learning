function Promise(fn) {
    this.callbackFunctions = []

    const resolve = (value) => {
        setTimeout(() => {
            this.data = value
            console.log('a-' + value)
            this.callbackFunctions.forEach((callback) => callback(value))
        })
    }

    fn(resolve)
}

Promise.prototype.then = function (onResolved) {
    return new Promise((resolve) => {
        console.log('b')
        this.callbackFunctions.push(() => {
            const res = onResolved(this.data)
            if (res instanceof Promise) {
                res.then((v) => resolve(v + '-outer'))
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
    }, 1000)
})
    .then((res) => {
        console.log(res)
        return new Promise((resolve) => {
            console.log('c')
            setTimeout(() => {
                console.log('d')
                resolve(2)
            }, 1000)
        })
    })
    .then(console.log)
