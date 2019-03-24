(function(exports) {
  function describe(classname, func) {
    console.log(classname)
    func()
  }
  exports.describe = describe
})(this);

(function(exports) {
  function it(test, func) {
    console.log(test)
    func()
  }
  exports.it = it
})(this);


(function(exports) {
  function expect(expectation) {
    return matcher(expectation)
  }
  exports.expect = expect
})(this);

(function(exports) {
  function matcher(expectation) {
    return {
      toEqual: function(assertion) {
        if (assertion === expectation) {
          console.log("✅")
        } else {
          console.log("❌", new Error().stack)
        }
      }
    }
  }
  exports.matcher = matcher
})(this);
