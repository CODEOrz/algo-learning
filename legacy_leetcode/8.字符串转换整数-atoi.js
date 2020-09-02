/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const charIntMap = { '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, }
  const MAX_INT = (Math.pow(2, 31) - 1)
  const MIN_INT = (Math.pow(2, 31))

  function strToInt(signal, intStr) {
    let factor = 1
    let ans = 0
    while (intStr.length > 0) {
      let endChar = intStr.splice(intStr.length - 1, 1)
      ans += (factor * charIntMap[endChar])
      factor *= 10
    }
    return signal === '-' ? -ans : ans
  }

  function isOutOfRange(str, signal) {
    let MAX_STRING = signal === '-' ? MIN_INT.toString() : MAX_INT.toString()
    let idx = 0
    while (idx <= 9) {
      if (str[idx] === MAX_STRING[idx]) {
        idx++
        continue
      } else if (str[idx] > MAX_STRING[idx]) {
        return false
      } else {
        return true
      }
    }
    return true
  }

  str = str.split('') // 转换为字符数组
  while (str[0] === ' ') { str.splice(0, 1) } // 移除字符串前的空格
  if (str[0] === '+' || str[0] === '-' || ('0' <= str[0] && str[0] <= '9')) { // 判断第一个非空格字符是否为有效字符
    let signal = '+'
    let intStr = []
    let currIndex = 0
    if (str[0] === '+' || str[0] === '-') { // 若有符号标识，记录符号标识
      signal = str[0]
      currIndex = 1
    }
    while ('0' <= str[currIndex] && str[currIndex] <= '9') {  // 截取数字字符串
      intStr.push(str[currIndex])
      currIndex++
    }
    while (intStr[0] === '0') { intStr.splice(0, 1) } // 移除数字字符串的前缀0
    if (intStr.length > 10) {
      return signal === '-' ? -MIN_INT : MAX_INT
    } else if (intStr.length === 10) {
      if (!isOutOfRange(intStr, signal)) {  // 判断数字字符串是否越界
        return signal === '-' ? -MIN_INT : MAX_INT
      } else {
        return strToInt(signal, intStr)
      }
    } else {
      return strToInt(signal, intStr)
    }
  } else {
    return 0
  }
}

/**
 * 解法二： 确定有限状态机
 */

// INT_MAX = 2 ** 31 - 1
// INT_MIN = -2 ** 31

// class Automaton:
//     def __init__(self):
//         self.state = 'start'
//         self.sign = 1
//         self.ans = 0
//         self.table = {
//             'start': ['start', 'signed', 'in_number', 'end'],
//             'signed': ['end', 'end', 'in_number', 'end'],
//             'in_number': ['end', 'end', 'in_number', 'end'],
//             'end': ['end', 'end', 'end', 'end'],
//         }
        
//     def get_col(self, c):
//         if c.isspace():
//             return 0
//         if c == '+' or c == '-':
//             return 1
//         if c.isdigit():
//             return 2
//         return 3

//     def get(self, c):
//         self.state = self.table[self.state][self.get_col(c)]
//         if self.state == 'in_number':
//             self.ans = self.ans * 10 + int(c)
//             self.ans = min(self.ans, INT_MAX) if self.sign == 1 else min(self.ans, -INT_MIN)
//         elif self.state == 'signed':
//             self.sign = 1 if c == '+' else -1

// class Solution:
//     def myAtoi(self, str: str) -> int:
//         automaton = Automaton()
//         for c in str:
//             automaton.get(c)
//         return automaton.sign * automaton.ans

// @lc code=end

