const _ = require('lodash')

const test = (testSet = [], testFunc) => {
  let resultSet = []

  _.forEach(testSet, (testCase, index) => {
    const answer = testFunc(...testCase.params)
    const expectAnswer = testCase.answer
    const judgement = _.isEqual(answer, expectAnswer)

    const str = index + 'ㅤㅤ|ㅤㅤ'
      + judgement ? 'PASS' : 'FAIELD' + 'ㅤㅤ|ㅤㅤ'
        + judgement ? '' : ('EXPECTED: ' + expectAnswer + 'ㅤㅤ|ㅤㅤ' + 'OUTCOME: ' + answer)

    resultSet.push(str)
  })

  _.forEach(resultSet, res => {
    console.log(res)
  })
}

module.exports = test