(function(exports) {
  function testsAPIGuardian() {

    var api = new APIGuardian();
    var headline = "Is technology delivering in schools? Our panel debates";

    function testRequestsHeadline() {
      var pass = (console.log(api.processRequest)) === headline;
      testOutputter('testRequestsHeadline', pass);
    }

    function testStoresHeadline() {
      var pass = (api.processRequest.headlinesArray) === headline;
      testOutputter('testStoresHeadline', pass);
    }

    testStoresHeadline();
    testRequestsHeadline();
    }
  testsAPIGuardian();
})(this);
