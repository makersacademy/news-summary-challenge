(function (exports) {
  let assert = {
    isTrue: function (assertion) {
      if (!assertion) {
        throw new Error('Assertion failed: ' + assertion + 'is not truthy!');
      }
    },
  };
  exports.assert = assert;
})(this);
