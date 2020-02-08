(function(exports) {
  function Test(value) {
    this.value = value
  }

  Test.prototype.toEqual = function(thingToTest) {
    if (this.value === thingToTest) {
      console.log('Test PASSED')
    } else {
      console.log('Test FAILED')
      console.log(`Expected ${this.value} to equal ${thingToTest}`)
    }
  }

  Test.prototype.toInclude = function(thingToTest) {
    if (this.value.includes(thingToTest)) {
      console.log('Test PASSED')
    } else {
      console.log('Test FAILED')
      console.log(`Expected ${this.value} to include ${thingToTest}`)
    }
  }

  Test.prototype.toBe = function(thingToTest) {
    let value = this.value.__proto__.constructor.name
    let thing = thingToTest.__proto__.constructor.name
    if (value === thing) {
      console.log('Test PASSED')
    } else {
      console.log('Test FAILED')
      console.log(`Expected ${value} to be a ${thing}`)
    }
  }
  
  var expect = function (value) {
    return new Test(value)
  }

  exports.expect = expect
})(this)
