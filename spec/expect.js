(function (exports) {
  function Expectation(input) {
    this._expectation = input
  }

  Expectation.prototype = {
    toEqual: function (value) {
      if (this._expectation.valueOf() !== value) {
        throw new Error(`Failure: Expected ${value} but returned ${this._expectation.valueOf()}`)
      }
    },

    toBeInstanceOf: function (objectType) {
      if (!(this._expectation instanceof objectType)) {
        throw new Error(`Failure: Expected value to be ${objectType.name} but returned ${this._expectation.constructor.name}`)
      }
    },

    toInclude: function (value) {
      if (!(this._expectation.includes(value))) {
        throw new Error(`Failure: ${value} not found within ${this._expectation}`)
      }
    }

  }

  function expect(input) {
    return new Expectation(input)
  }

  exports.Expectation = Expectation
  exports.expect = expect

})(this)
