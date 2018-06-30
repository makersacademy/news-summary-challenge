(function(exports) {
  function TestReturnValues() {
    this.trueStatement = true,
    this.equalStatement = "test string",
    this.emptyObject = [],
    this.notEmptyObject = [1, 2, "dog", "blue"],
    this.anArray = ["Hello, I'm an array!"],
    this.emptyArray = [],
    this.notEmptyArray = [1, 2, "dog", "blue"]
  }

  TestReturnValues.prototype.tester = function () {
    console.log('Tester function called')
    return 'Tester function called'
  }

  TestReturnValues.prototype.callTester = function () {
    this.tester()
  }

  exports.TestReturnValues = TestReturnValues
})(this)
