class test {
  constructor(value) {
    this.innerValue = value
  }

  set innerValue(val) {
    this.innerValue = val
  }

  get innerValue() {
    return 
  }
}

let a = new test(2)
console.log(a.innerValue)
a.innerValue = 3
console.log(a.innerValue)
