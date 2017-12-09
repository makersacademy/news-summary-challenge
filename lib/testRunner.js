'use strict';

(function(exports) {
  function TestRunner() {
    this.units = [];
  };

  TestRunner.prototype.register = function(unit) {
    this.units.push(unit);
  };

  TestRunner.prototype.run = function() {
    var testList = document.getElementById("test-list")
    for (var index = 0; index < this.units.length; index++) {
      var test = this.units[index]
      testList.innerHTML += `<li> ${test.name} : ${test()} </li>`
    };
  };

  var runner = new TestRunner();
  exports.runner = runner;
})(this);
