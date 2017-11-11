(function(exports) {

  var apiCall = new GuardianAPI();

  function testsInstantiation() {
    console.log("Is instantiated");
    assert.isTrue(apiCall.constructor === GuardianAPI);
  };

  runTests = function() {
    testsInstantiation();
  };

  runTests();
})(this);
