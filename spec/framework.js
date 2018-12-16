//expect
(function(exports) {
  function expect(exp, matcher) {
    return matchers(exp)
  }
  exports.expect = expect;
})(this);

// matcher
(function(exports) {
  function matchers(exp) {
    return {
      toEqual: function(assertion) {
        if(exp === assertion) {
          console.log(' ✅')
        } else {
          console.log(`❌ ${exp} is not equal to ${assertion}`)
        }
      },
      isInstanceOf: function(assertion) {
        if (exp instanceof assertion) {
          console.log(' ✅')
        } else {
          console.log(`❌ ${exp} is not an instance og ${assertion}`)
        }
      }
    }
  }
  exports.matchers = matchers
})(this);

// describe
(function(exports) {
  function describe(description, funk) {
    console.log(description);
    funk();
  };
  exports.describe = describe;
})(this);

// it
(function(exports) {
  function it(message, funk) {
    describe(' ' + message, funk)
  };
  exports.it = it;
})(this);
