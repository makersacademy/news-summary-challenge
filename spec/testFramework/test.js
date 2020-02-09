(function(exports) {
  function Test(value) {
    this.value = value
  }

  Test.prototype.toEqual = function(thingToTest) {
    if (this.value === thingToTest) {
      console.log('%cTest PASSED', 'color: green')
    } else {
      console.log('%cTest FAILED', 'color: red')
      console.log('%cExpected ' + `%c${this.value} ` + `%cto equal ` + `%c${thingToTest}`, 'color: yellow', 'color: none', 'color: yellow', 'color: none')
    }
  }

  Test.prototype.toInclude = function(thingToTest) {
    if (this.value.includes(thingToTest)) {
      console.log('%cTest PASSED', 'color: green')
    } else {
      console.log('%cTest FAILED', 'color: red')
      console.log('%cExpected ' + `%c${this.value} ` + `%cto include ` + `%c${thingToTest}`, 'color: yellow', 'color: none', 'color: yellow', 'color: none')
    }
  }

  Test.prototype.toBe = function(thingToTest) {
    let value = this.value.__proto__.constructor.name
    let thing = thingToTest.__proto__.constructor.name
    if (value === thing) {
      console.log('%cTest PASSED', 'color: green')
    } else {
      console.log('%cTest FAILED', 'color: red')
      console.log('%cExpected ' + `%c${value} ` + `%cto be a ` + `%c${thing}`, 'color: yellow', 'color: none', 'color: yellow', 'color: none')
    }
  }

  Test.prototype.notToInclude = function(thingToTest) {
    if (!this.value.includes(thingToTest)) {
      console.log('%cTest PASSED', 'color: green')
    } else {
      console.log('%cTest FAILED', 'color: red')
      console.log('%cExpected ' + `%c${this.value} ` + `%cnot to include ` + `%c${thingToTest}`, 'color: yellow', 'color: none', 'color: yellow', 'color: none')
    }
  }

  var expect = function (value) {
    return new Test(value)
  }

  exports.expect = expect
})(this)
