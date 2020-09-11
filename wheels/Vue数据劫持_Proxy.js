function observe(target) {
  if (typeof target !== 'object' || target == null) {
    return target;
  }
  const ob = new Proxy(target, {
    get(target, key, receiver) {
      return observe(Reflect.get(target, key, receiver))
    },
    set(target, key, value, receiver) {
      if (value === target[key]) {
        return true;
      }
      const ownKeys = Reflect.ownKeys(target);
      if (ownKeys.includes(key)) {
        console.log('旧属性');
      } else {
        console.log('新添加的属性');
        return Reflect.set(target, key, value, receiver)
      }
      renderView()
    },
    deleteProperty(target, key) {
      return Reflect.deleteProperty(target, key);
    }
  })

  return ob
}


const data = {
  name: 'jack',
  age: 25,
  info: {
    city: 'beijing'
  },
  numbers: [1, 2, 3, 4]
}

const proxyData = observe(data)
console.log('')