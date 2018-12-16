'use strict';

(function(exports) {

  function TestJS() {
    this.description = "";
    this.tests = [];
  }

  TestJS.prototype = {
    test: function(description, assertion) {
      this.description = description;
      assertion();
      this.printResults();
    },

    assertEquals: function(result, expected) {
      return (result === expected ? this.passTest() : this.failTest(result, expected));
    },

    passTest: function() {
      this.tests.push("<p id='pass'>Test Passed: " + this.description + "</p><br>");
    },

    failTest: function(result, expected) {
      this.tests.push("<p id='fail'>Test Failed: " + this.description + '<br> Expected result: ' + expected + ' Actual result: ' + result + "</p><br>");
    },

    printResults: function() {
      document.getElementById("result").innerHTML = this.render();
    },

    render: function() {
      return this.tests.join("")
    }
  }

  exports.TestJS = TestJS;
})(this);
