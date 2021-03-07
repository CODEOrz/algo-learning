function throttle(func, wait, options) {
    var timer, context, args
    var previous = 0
    if (!options) options = {}

    var later = function () {
        previous = options.leading === false ? 0 : new Date().getTime()
        timer = null
        func.apply(context, args)
        if (!timer) {
            context = args = null
        }
    }

    var throttled = function () {
        var now = new Date().getTime()
        if (!previous && options.leading === false) previous = now
        var remaining = wait - (now - previous)
        context = this
        args = arguments

        if (remaining <= 0 || remaining > wait) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            previous = now
            func.apply(context, args)
            if (!timer) {
                context = args = null
            }
        } else if (!timer && options.trailing !== false) {
            timer = setTimeout(later, remaining)
        }
    }

    throttled.cancel = function () {
        clearTimeout(timer)
        previous = 0
        timer = null
    }

    return throttled
}

// const betterFn = throttle(() => console.log('fn 函数执行了'), 1000)
// setInterval(betterFn, 10)
