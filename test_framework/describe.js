(function (exports) {
  function describe(desc, func) {
    console.log(desc)
    func()
  }

  exports.describe = describe
})(this)
