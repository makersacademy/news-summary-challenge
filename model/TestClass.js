(function(exports) {
  function TestClass(attribute) {
    this.attribute = attribute;
  }

  TestClass.prototype.read = function() {
    return this.attribute;
  };

  exports.TestClass = TestClass;
})(this);
