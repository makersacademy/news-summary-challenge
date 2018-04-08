(function(exports) {

  function describe(string, callback) {
    console.log(string);
    callback();
  };

  function it(string, callback) {
    if (callback()) {
      console.log(`%c ${string}\n ${callback()}`, 'color: red');
    } else {
      console.log(`%c ${string}`, 'color: green');
    };
  };

  exports.describe = describe;
  exports.it = it;
})(this)
