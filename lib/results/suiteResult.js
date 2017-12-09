'use strict';

(function(exports) {
  var utils = require('./utils.js');

  function message(text, level) {
    console.log(utils.indent(level) + text);
  };

  function SuiteResult(desc) {
    this.desc = (desc === undefined ? '' : desc);
    this.group = [];
  };

  SuiteResult.prototype.add = function(outcome) {
    this.group.push(outcome);
  };

  SuiteResult.prototype.print = function(level) {
    message(this.desc, level);
    for (var index = 0; index < this.group.length; index++) {
      this.group[index].print(level + 1);
    };
  };

  SuiteResult.prototype.printError = function() {
    for (var index = 0; index < this.group.length; index++) {
      this.group[index].printError();
    };
  };

  SuiteResult.prototype.countAll = function() {
    var total = 0; 
    for (var index = 0; index < this.group.length; index++) {
      total += this.group[index].countAll();
    };
    return total
  };

  SuiteResult.prototype.countFailures = function() {
    var total = 0; 
    for (var index = 0; index < this.group.length; index++) {
      total += this.group[index].countFailures();
    };
    return total
  };

  exports.SuiteResult = SuiteResult;
})(this);
