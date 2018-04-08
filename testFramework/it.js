(function(exports) {
  function it(descriptionString, testBlock) {
    if (testBlock()) {
      console.log(`%c ${descriptionString}\n ${testBlock()}`, 'color: red');
    } else {
      console.log(`%c ${descriptionString}`, 'color: green');
    }
  }
  exports.it = it;
})(this)
