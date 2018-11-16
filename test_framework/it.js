(function (exports) {
  function it(message, func) {
    describe(" " + message, func)
  }

  exports.it = it
})(this)
