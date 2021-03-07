/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


/**
 * 解法一 : 自己想的
 */

  function solveSudoku (board) {
    const numsSet = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    const boardLen = board.length
    const dimension = 3

    function findAvailableNums(row, col, board) {
      let existedSet = new Set()

      board[row].forEach((v) => existedSet.add(v))
      for (let i = 0; i < boardLen; ++i) {
        existedSet.add(board[i][col])
      }

      const currentRowBlock = Math.floor(row / dimension)
      const currentColBlock = Math.floor(col / dimension)
      for (let i = currentRowBlock * dimension; i < (currentRowBlock + 1) * dimension; ++i) {
        for (let j = currentColBlock * dimension; j < (currentColBlock + 1) * dimension; ++j) {
          existedSet.add(board[i][j])
        }
      }

      return numsSet.filter((v) => !existedSet.has(v))
    }

    function solver(index, board) {
      if (index === boardLen * boardLen) return true

      const row = Math.floor(index / boardLen)
      const col = index % boardLen

      if (board[row][col] === '.') {
        const availableNums = findAvailableNums(row, col, board)
        if (availableNums.length > 0) {
          for (let k = 0; k < availableNums.length; ++k) {
            board[row][col] = availableNums[k]
            if (solver(index + 1, board)) return true
            board[row][col] = '.'
          }
        }
      } else {
        return solver(index + 1, board)
      }
    }

    solver(0, board)
  }

export default solveSudoku

/*****************************************************************************************************************************************************
Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row.
Each of the digits 1-9 must occur exactly once in each column.
Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
Empty cells are indicated by the character '.'.


A sudoku puzzle...


...and its solution numbers marked in red.

Note:

The given board contain only digits 1-9 and the character '.'.
You may assume that the given Sudoku puzzle will have a single unique solution.
The given board size is always 9x9.

********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
