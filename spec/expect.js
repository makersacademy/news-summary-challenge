(function(exports) {
  function Expectation(valueToTest) {
    this._valueToTest = valueToTest
  }

  Expectation.prototype = {
    toEqual: function(expectedValue) {
      if (this._valueToTest.valueOf() !== expectedValue) {
        throw new Error(`Failure: Expected ${expectedValue} but returned ${this._valueToTest.valueOf()}`)
      }
    },

    toBeInstanceOf: function(expectedObject) {
      if (!(this._valueToTest instanceof expectedObject)) {
        throw new Error(`Failure: Expected value to be ${expectedObject.name} but returned ${this._valueToTest.constructor.name}`)
      }
    },

    toInclude: function(expectedValue) {
      if (!(this._valueToTest.includes(expectedValue))) {
        throw new Error(`Failure: ${expectedValue} not found within ${this._valueToTest}`)
      }
    }

  }

  function expect(valueToTest) {
    return new Expectation(valueToTest)
  }

  exports.Expectation = Expectation
  exports.expect = expect

})(this)
