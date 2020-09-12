// 首先为什么要深拷贝？不希望数据被修改或者只需要部分修改数据。
// 怎么实现深拷贝？简单需求用 JSON 反序列化，复杂需求用递归克隆。
// 手写深拷贝的优点？体现扎实的 JS 基础。
// 至于缺点以及如何解决稍后再回答

// 最简单的手写深拷贝就一行，通过 JSON 反序列化来实现
const B = JSON.parse(JSON.stringify(A))
// 缺点也是显而易见的，JSON value不支持的数据类型，都拷贝不了
// 不支持函数
// 不支持undefined（支持null）
// 不支持循环引用，比如 a = {name: 'a'}; a.self = a; a2 = JSON.parse(JSON.stringify(a))
// 不支持Date，会变成 ISO8601 格式的字符串
// 不支持正则表达式
// 不支持Symbol

