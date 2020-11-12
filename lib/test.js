(function (exports) {
  function it(description, callBack) {
    console.log(description)
    callBack()
  }
  exports.it = it
})(this)