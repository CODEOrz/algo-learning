const MyReact = (function () {
  let hooks = [] // hooks数组
  let currentHook = 0 // 当前hook的索引
  return {
    render(Component) {
      const Comp = Component() // 执行 effects
      Comp.render()
      currentHook = 0 // 为下一次render重置hook索引
      return Comp
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray
      const deps = hooks[currentHook] // type: array | undefined
      const hasChangedDeps = deps ? !depArray.every((el, i) => el === deps[i]) : true
      if (hasNoDeps || hasChangedDeps) {
        callback()
        hooks[currentHook] = depArray
      }
      currentHook++ // 当前hook处理完毕
    },
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue // type: any
      const setStateHookIndex = currentHook // 为了setState引用正确的闭包
      const setState = newState => (hooks[setStateHookIndex] = newState)
      return [hooks[currentHook++], setState]
    }
  }
})()