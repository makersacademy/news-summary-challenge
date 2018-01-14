(function(exports) {
  function TestRunner() {
  this.tests = [];
  };

  TestRunner.prototype.addTest = function(test) {
    this.tests.push(test);
  };

  TestRunner.prototype.runTests = function() {
    this.tests.forEach((test) => test())
  };

  exports.TestRunner = TestRunner;
})(this);

var testRunner = new TestRunner();
testRunner.addTest(testConvertDataToHtmlString);
testRunner.runTests();
