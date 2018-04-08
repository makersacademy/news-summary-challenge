(function(exports) {
  function describe(descriptionString, itBlock) {
    console.log(descriptionString);
    itBlock();
  }
  exports.describe = describe;
})(this)
