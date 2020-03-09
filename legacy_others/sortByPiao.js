const _ = require('lodash')

const piaoValueMap = {
  douwei: 8,
  wangfei: 4,
  tingfeng: 4,
  yapeng: 2,
}

const sortByPiao = (list) => {
  const nameMap = _.map(list, person => {
    return {
      name: person,
      value: piaoValueMap[person]
    }
  })
  const result = _.sortBy(nameMap, ['value', 'name'])
  let resultInStr = ''
  for (let i = 0; i < result.length; i++) {
    resultInStr += (result[i].name + ((i !== result.length -1) ? ' < ' : ''))
  }
  console.log(resultInStr)
}


sortByPiao(['yapeng', 'douwei', 'wangfei', 'tingfeng'])
sortByPiao(['douwei', 'wangfei'])
sortByPiao(['wangfei', 'tingfeng'])
sortByPiao(['yapeng', 'douwei', 'wangfei'])