const _ = require('lodash')

class CArray {
  constructor(numElements) {
    this.numElements = numElements
    this.dataStore = []
    for (let i = 0; i < numElements; ++i) {
      this.dataStore[i] = i
    }
  }

  setData() {
    for (let i = 0; i < this.numElements; ++i) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
  }

  toString() {
    let restr = ''
    for (let i = 0; i < this.dataStore.length; ++i) {
      restr += this.dataStore[i] + ' '
      if (i > 0 & (i + 1) % 10 == 0) {
        restr += '\n'
      }
    }
    return restr
  }

  clear() {
    for (let i = 0; i < this.dataStore.length; ++i) {
      this.dataStore[i] = 0
    }
  }

  insert(element) {
    this.dataStore[this.pos++] = element
  }
}

function swap(arr, index1, index2) {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function toString(arr) {
  let restr = ''
  for (let i = 0; i < arr.length; ++i) {
    restr += arr[i] + ' '
    if (i > 0 & (i + 1) % 10 == 0) {
      restr += '\n'
    }
  }
  return restr
}

function bubbleSort(elements) {
  if (elements.length <= 1) return elements
  for (let outer = elements.length - 1; outer > 0; --outer) {
    for (let inner = 0; inner < outer; ++inner) {
      if (elements[inner] > elements[inner + 1]) {
        swap(elements, inner, inner + 1)
      }
    }
  }
  return elements
}

function selectionSort(elements) {
  if (elements.length <= 1) return elements
  for (let outer = 0; outer < elements.length - 1; ++outer) {
    let min = outer
    for (let inner = outer + 1; inner < elements.length; ++inner) {
      if (elements[inner] < elements[min]) {
        min = inner
      }
    }
    swap(elements, outer, min)
  }
  return elements
}

function insertSort(elements) {
  if (elements.length <= 1) return elements
  for (let outer = 1; outer < elements.length; ++outer) {
    let temp = elements[outer]
    let inner = outer
    while (inner > 0 && elements[inner - 1] >= temp) {
      elements[inner] = elements[inner - 1]
      inner--
    }
    elements[inner] = temp
  }
  return elements
}

// from bottom to top
function mergeSort(elements) {
  if (elements.length <= 1) return elements
  let step = 1
  while (step < elements.length) {
    let left = 0
    let right = step
    while (right + step <= elements.length) {
      mergeArray(elements, left, left + step, right, right + step)
      left = right + step
      right = left + step
    }
    if (right < elements.length) {
      mergeArray(elements, left, left + step, right, elements.length)
    }
    step *= 2
  }

  return elements

  function mergeArray(elements, left_start, left_end, right_start, right_end) {
    let rArray = []
    let lArray = []

    let k = right_start
    for (let i = 0; i < (right_end - right_start); ++i) {
      rArray[i] = elements[k]
      ++k
    }

    let l = left_start
    for (let i = 0; i < (left_end - left_start); ++i) {
      lArray[i] = elements[l]
      ++l
    }

    rArray[rArray.length] = Infinity
    lArray[lArray.length] = Infinity

    let m = 0
    let n = 0

    for (let j = left_start; j < right_end; ++j) {
      if (lArray[m] <= rArray[n]) {
        elements[j] = lArray[m]
        ++m
      } else if (lArray[m] > rArray[n]) {
        elements[j] = rArray[n]
        ++n
      }
    }
  }
}

function shellSort(elements, gaps = [5, 3, 1]) {
  for (let g = 0; g < gaps.length; ++g) {
    for (let outer = gaps[g]; outer < elements.length; ++outer) {
      let temp = elements[outer]
      let inner = 0
      for (inner = outer; inner >= gaps[g] && elements[inner - gaps[g]] > temp; inner -= gaps[g]) {
        elements[inner] = elements[inner - gaps[g]]
      }
      elements[inner] = temp
    }
  }
  return elements
}

function quickSort(elements) {
  if (elements.length <= 1) return elements
  let lesser = []
  let greater = []
  let pivot = elements[0]
  for (let i = 1; i < elements.length; ++i) {
    if (elements[i] >= pivot) {
      greater.push(elements[i])
    } else if (elements[i] < pivot) {
      lesser.push(elements[i])
    }
  }
  return quickSort(lesser).concat(pivot, quickSort(greater))
}




let nums = new CArray(20)
nums.setData()
let validSet = _.cloneDeep(nums.dataStore).sort((a, b) => a - b)

console.log('\n----- Before Sort -----')
console.log(nums.toString())
let result = mergeSort(nums.dataStore)
console.log('\n----- After Sort -----')
console.log(toString(result))
console.log('\n----- Valid Set -----')
console.log(toString(validSet))
console.log('\n----- IsEqual -----')
console.log(_.isEqual(validSet, result))

console.log('\n\n\ndone')