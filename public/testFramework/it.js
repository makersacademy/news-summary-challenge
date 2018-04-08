(function(exports) {

  function it(string, callback) {
    if (callback()) {
      console.log(`%c ${string}\n ${callback()}`, 'color: red');
    } else {
      console.log(`%c ${string}`, 'color: green');
    }
  }

  exports.it = it;
})(this)
