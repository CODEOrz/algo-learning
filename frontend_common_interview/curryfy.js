// 在计算机科学中，柯里化（Currying）是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。
// 函数柯里化的主要作用和特点就是参数复用、提前返回和延迟执行。

// 通用版
function curry(fn, args, holes) {
    length = fn.length
    args = args || []
    holes = holes || []

    return function () {
        var _args = args.slice(0),
            _holes = holes.slice(0),
            argsLen = args.length,
            holesLen = holes.length,
            arg,
            i,
            index = 0

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i]
            // 处理类似 fn(1, _, _, 4)(_, 3) 这种情况，index 需要指向 holes 正确的下标
            if (arg === _ && holesLen) {
                index++
                if (index > holesLen) {
                    _args.push(arg)
                    _holes.push(argsLen - 1 + index - holesLen)
                }
            }
            // 处理类似 fn(1)(_) 这种情况
            else if (arg === _) {
                _args.push(arg)
                _holes.push(argsLen + i)
            }
            // 处理类似 fn(_, 2)(1) 这种情况
            else if (holesLen) {
                // fn(_, 2)(_, 3)
                if (index >= holesLen) {
                    _args.push(arg)
                }
                // fn(_, 2)(1) 用参数 1 替换占位符
                else {
                    _args.splice(_holes[index], 1, arg)
                    _holes.splice(index, 1)
                }
            } else {
                _args.push(arg)
            }
        }
        if (_holes.length || _args.length < length) {
            return curry.call(this, fn, _args, _holes)
        } else {
            return fn.apply(this, _args)
        }
    }
}

// ES6
const curry = (fn, arr = []) => (...args) =>
    ((arg) => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([...arr, ...args])
