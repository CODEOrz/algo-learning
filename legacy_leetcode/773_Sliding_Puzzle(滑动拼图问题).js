/**
 * 解法一 
 * 164 ms, faster than 30.64%
 * 39.3 MB, less than 54.70%
 */

var slidingPuzzle = function (board) {

  function swap(str, idx1, idx2) {
    let charArr = str.split('')
    let tmp = charArr[idx1]
    charArr[idx1] = charArr[idx2]
    charArr[idx2] = tmp
    return charArr.join('')
  }

  const row = 2
  const col = 3
  let start = ''
  const target = '123450'
  let q = []
  let visited = []
  let step = 0
  const neighbor = [
    [1, 3],
    [0, 4, 2],
    [1, 5],
    [0, 4],
    [3, 1, 5],
    [4, 2],
  ]

  for (let i = 0; i < row; ++i) {
    for (let j = 0; j < col; ++j) {
      start += board[i][j]
    }
  }
  
  q.push(start)
  visited.push(start)

  while (q.length > 0) {
    const qLen = q.length
    for (let i = 0; i < qLen; ++i) {
      let curr = q.shift()
      if (curr === target) {
        return step
      }

      const indexOf0 = curr.indexOf('0')

      neighbor[indexOf0].forEach(v => {
        let newBoard = curr
        newBoard = swap(newBoard, v, indexOf0)
        if (!visited.includes(newBoard)) {
          q.push(newBoard)
          visited.push(newBoard)
        }
      })
    }
    step ++
  }

  return -1
}

export default slidingPuzzle

/*****************************************************************************************************************************************************
[Question]
On a 2x3 board, there are 5 tiles represented by the integers 1 through 5, and an empty square represented by 0.

A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].

Given a puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

Examples:

Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.
Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.
Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]
Input: board = [[3,2,4],[1,5,0]]
Output: 14
Note:

board will be a 2 x 3 array as described above.
board[i][j] will be a permutation of [0, 1, 2, 3, 4, 5].


********************************************************************************************************************************************************
[Comment]


********************************************************************************************************************************************************/
