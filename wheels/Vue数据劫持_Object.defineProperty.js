const data = {
  name: 'jack',
  age: 25,
  info: {
    address: '北京'
  },
  numbers: [1, 2, 3, 4]
};

function observerObject(target, name, value) {
  if (typeof value === 'object' || Array.isArray(target)) {
    observer(value);  // 递归添加observer
  }
  Object.defineProperty(target, name, {
    get() {
      return value;
    },
    set(newVal) {
      if (newVal !== value) {
        if (typeof value === 'object' || Array.isArray(value)) {
          observer(value);
        }
        value = newVal;
      }
      renderView();
    }
  });
}

function observer(target) {
  if (typeof target !== 'object' || !target) {
    return target;
  }
  for (const key in target) {
    if (target.hasOwnProperty(key)) {
      const value = target[key];
      observerObject(target, key, value);
    }
  }
}

observer(data);

console.log(data)
console.log(data)