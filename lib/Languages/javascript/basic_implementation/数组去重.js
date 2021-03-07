//键值对方法去重
function unique(array) {
    var obj = {}
    return array.filter(function (item, index, array) {
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
    })
}

// 兼容性最好
function unique(array, isSorted, iteratee) {
    var res = []
    var seen = []

    for (var i = 0, len = array.length; i < len; i++) {
        var value = array[i]
        var computed = iteratee ? iteratee(value, i, array) : value
        if (isSorted) {
            if (!i || seen !== computed) {
                res.push(value)
            }
            seen = computed
        } else if (iteratee) {
            if (seen.indexOf(computed) === -1) {
                seen.push(computed)
                res.push(value)
            }
        } else if (res.indexOf(value) === -1) {
            res.push(value)
        }
    }
    return res
}

/**
 
那么，对于这样一个数组
var array = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN, NaN];
以上各种方法去重的结果到底是什么样的呢？

我特地整理了一个列表，我们重点关注下对象和 NaN 的去重情况：

方法	          结果	                                                               说明
for循环	          [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN]	      对象和 NaN 不去重
indexOf	         [1, "1", null, undefined, String, String, /a/, /a/, NaN, NaN]	     对象和 NaN 不去重
sort	         [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined]	 对象和 NaN 不去重 数字 1 也不去重
filter + indexO  [1, "1", null, undefined, String, String, /a/, /a/]	             对象不去重 NaN 会被忽略掉
filter + sort	 [/a/, /a/, "1", 1, String, 1, String, NaN, NaN, null, undefined]	 对象和 NaN 不去重 数字 1 不去重
优化后的键值对方法	[1, "1", null, undefined, String, /a/, NaN]	                        全部去重
Set	             [1, "1", null, undefined, String, String, /a/, /a/, NaN]	         对象不去重 NaN 去重

*/
