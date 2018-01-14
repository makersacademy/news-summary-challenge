(function(exports) {
  function TestRunner() {
  this.tests = [];
  };

  TestRunner.prototype.addTest = function(test) {
    this.tests.push(test);
  };

  TestRunner.prototype.clearAppDiv = function() {
    document.getElementById('app').innerHTML = ""
  };

  TestRunner.prototype.runTests = function() {
    this.tests.forEach((test) => test())
  };

  exports.TestRunner = TestRunner;
})(this);

var testRunner = new TestRunner();
testRunner.addTest(testConvertDataToHtmlString);
testRunner.addTest(testPrintHtml);
testRunner.runTests();
