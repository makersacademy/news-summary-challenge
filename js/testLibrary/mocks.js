(function(exports) {
  function MockObject(name, mockFunctions) {
    this.name = name;
    self = this;
    mockFunctions.forEach(function(mockFunction) {
      self[methodProperty(mockFunction, "CallCount")] = 0
      self[methodProperty(mockFunction, "Arguments")]
      self[mockFunction] = createFunction(mockFunction);
    });
  }

  MockObject.prototype = {
    returnValue: function(value) {
      callerMethod = this.lastCaller
      this[methodProperty(callerMethod, "ReturnValue")] = value
    }
  }

  function createFunction(mockFunction) {
    return function() {
      this.lastCaller = mockFunction;
      this[methodProperty(mockFunction, "CallCount")]++
      this[methodProperty(mockFunction, "Arguments")] = arguments;
      return this[methodProperty(mockFunction, "ReturnValue")] || this;
    }
  }

  function methodProperty(mockFunction, property) {
    return mockFunction + property;
  }

  exports.MockObject = MockObject;
})(this);
