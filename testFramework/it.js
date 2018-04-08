(function(exports) {
  function it(descriptionString, testBlock) {
    if (testBlock()) {
      console.log(`%c ${string}\n ${testBlock()}`, 'color: red');
    } else {
      console.log(`%c ${string}`, 'color: green');
    }
  }
  exports.it = it;
})(this)
