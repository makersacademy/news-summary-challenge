(function(exports) {

  var apiCall = new GuardianAPI();
  var list = new HeadlinesList();
  var headline = "Angry Tiger loose in London!";

  // function testsInstantiation() {
  //   console.log("Is instantiated");
  //   assert.isTrue(apiCall.constructor === GuardianAPI);
  // };

  function testsHeadlineRequest() {
    assert.isTrue(console.log(apiCall.runRequest) === headline);
  }

  function testsHeadlineStored() {
    apiCall.runRequest
    assert.isTrue(list.returnHeadlines() === headline)
  }

  runTests = function() {
    // testsInstantiation();
    testsHeadlineRequest();
    testsHeadlineStored();
  };

  runTests();
})(this);
