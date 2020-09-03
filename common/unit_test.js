const _ = require('lodash')

function Test(func, cases) {
  if (cases.length === 0 || !func) {
    return
  }

  const ans = []
  for (let i = 0; i < cases.length; ++i) {
    const executeResult = func(cases.params)
    const judge = _.isEqual(executeResult, cases[i].answer)
    ans.push(judge)
  }

  _.forEach(ans, (res, index) => {
    console.log(`序号 ${index} 用例执行结果: ${res ? '通过' : '失败'}`)
  })
}

module.exports = Test