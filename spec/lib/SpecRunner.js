"use strict";

(function(exports) {
  function SpecRunner() {
    this.units = []
  }

  SpecRunner.prototype.register = function(unit) {
    this.units.push(unit)
  }

  SpecRunner.prototype.run = function() {
    var testList = document.getElementById("test-list")
    for (var index = 0; index < this.units.length; index++) {
      var test = this.units[index]
      testList.innerHTML += `<li> ${test.name} : ${test()} </li>`
    }
  }

  var runner = new SpecRunner()
  exports.runner = runner
})(this)
