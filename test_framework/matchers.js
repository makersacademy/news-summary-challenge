(function (exports) {
  function matchers(exp) {
    return {
      toEqual: function (assertion) {
        if (exp === assertion) {
          console.log('✅')
          return true
        } else {
          console.log('❌ FAIL ^');
          return false
        }
      },
      toBeAnInstanceOf: function (instance) {
        if (exp instanceof instance) {
          console.log('✅')
          return true
        } else {
          console.log('❌ FAIL ^');
          return false
        }
      }
    }
  }
  exports.matchers = matchers
})(this)
