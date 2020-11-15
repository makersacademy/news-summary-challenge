(function (exports) {
  function expect(expression) {
    exports.expression = expression
    return { toEqual }
  }

  exports.expect = expect
})(this)