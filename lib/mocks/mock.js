'use strict';

(function(exports) {
  var spy = require('./spy.js');

  function createSpy(mock, name, returnValue) {
    var spyObject = spy.spyOn(mock, name).returnValue(returnValue);
    mock.spies[name] = spyObject;
  };

  function fromArray(mock, array) {
    for (var index = 0; index < array.length; index++) {
      createSpy(mock, array[index]);
    };
  };

  function fromHash(mock, hash) {
    var keys = Object.keys(hash);
    for (var index = 0; index < keys.length; index++) {
      var method = keys[index];
      createSpy(mock, method, hash[method]);
    };
  };

  function Mock(name, methods) {
    this.name = name;
    if (methods == undefined) {
      ;
    } else if (methods.constructor === Array) {
      fromArray(this, methods);
    } else {
      fromHash(this, methods);
    };
  };

  exports.Mock = Mock;
})(this);
