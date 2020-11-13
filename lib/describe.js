(function (exports) {
  function describe(description, callBack) {
    console.log(description)
    callBack()
  }
  exports.describe = describe
})(this)