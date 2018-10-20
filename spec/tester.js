class matchers {
  constructor(testObj) {
    this.testObj = testObj;
  }

  toEq(value) {
    if (this.testObj == value) {
      console.log('          Passed!')
    } else {
      console.log(`          Failed! Expected ${this.testObj} to equal ${value}`)
    }
  }

  toBe(value) {
    if (this.testObj === value) {
      console.log('          Passed!')
    } else {
      console.log(`          Failed! Expected ${this.testObj} to be ${value}`)
    }
  }

  toInclude(value) {
    if (this.testObj.includes(value)) {
      console.log('          Passed!')
    } else {
      console.log(`          Failed! Expected ${this.testObj} to include ${value} `)
    }
  }
}

const expect = (testObj) => new matchers(testObj)

const describe = (desc, fn) => {
  console.log(desc)
  fn();
}

const it = function (desc, fn) {
  console.log('     ' + desc)
  fn();
}
