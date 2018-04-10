(function(exports) {

  function describe(string, callback) {
    console.log(string);
    callback();
  }
  exports.describe = describe;
})(this)
