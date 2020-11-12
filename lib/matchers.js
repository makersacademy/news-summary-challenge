(function (exports) {
  function toEqual(value) {
    let result = expression == value;
    printResult(result, value, expression)
  }
  exports.toEqual = toEqual
})(this)