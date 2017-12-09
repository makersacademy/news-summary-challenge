'use strict';

(function(exports) {
  function makeStub(spy) {
    var stub = function(...args) {
      spy.callWith(args);
      return spy.value;
    };

    stub.called = function() {
      return spy.called();
    };

    stub.calledWith = function(args) {
      return spy.calledWith(args);
    };

    return stub;
  };

  exports.makeStub = makeStub;
})(this);
