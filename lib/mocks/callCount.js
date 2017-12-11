'use strict';

(function(exports) {
  function CallCount() {
    this.calls = [];
  };

  CallCount.prototype.registerCall = function(args) {
    this.calls.push(args);
  };

  CallCount.prototype.calledWith = function(list) {
    var cmp = list.toString();
    for (var index = 0; index < this.calls.length; index++) {
      if (this.calls[index].toString() == cmp) {
        return true;
      };
    };
    return false
  };

  CallCount.prototype.called = function() {
    return this.calls.length > 0;
  };

  CallCount.prototype.calledMany = function(n) {
    return this.calls.length === n;
  };

  CallCount.prototype.calledOnce = function() {
    return this.calledMany(1);
  };

  exports.CallCount = CallCount;
})(this);
