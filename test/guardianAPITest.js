(function(exports) {

  var mockAPI = {
    runRequest: function() {
      return "Angry Tiger loose in London!"
    }
  }
  // var apiCall = new GuardianAPI();
  var list = new HeadlinesList();
  var headline = "Angry Tiger loose in London!";
  //
  // function testsInstantiation() {
  //   console.log("Is instantiated");
  //   assert.isTrue(apiCall.constructor === GuardianAPI);
  // };

  function testsHeadlineRequest() {
    console.log("Tests that a headline appears after XHR request")
    assert.isTrue(mockAPI.runRequest() === headline);
  };

  // function testsHeadlineStored() {
  //   mockAPI.runRequest;
  //   assert.isTrue(list.returnHeadlines() === headline)
  // };

  runTests = function() {
    testsHeadlineRequest();
  };

  runTests();
})(this);
