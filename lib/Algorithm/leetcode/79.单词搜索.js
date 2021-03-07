/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  function search(visited, word, row, col) {
    if (word.length === 0) {
      return true
    }

    if (
      row < 0 || row >= height || col < 0 || col >= width ||
      visited[row][col] || word[0] !== board[row][col]
    ) {
      return false
    }

    visited[row][col] = true
    const s = word.shift()

    const result = search(visited, word, row + 1, col) ||
      search(visited, word, row, col + 1) ||
      search(visited, word, row - 1, col) ||
      search(visited, word, row, col - 1)

    visited[row][col] = false
    word.unshift(s)

    return result
  }


  if (
    board.length === 0 || board[0].length === 0 ||
    word === '' || word === undefined || word === null
  ) {
    return false
  }

  word = word.split('')

  const height = board.length
  const width = board[0].length

  let visited = []
  for (let i = 0; i < height; ++i) {
    visited.push(new Array(width).fill(false))
  }

  for (let i = 0; i < height; ++i) {
    for (let j = 0; j < width; ++j) {
      const isFound = search(visited, word, i, j)
      if (isFound) {
        return true
      }
    }
  }

  return false
}
// @lc code=end

