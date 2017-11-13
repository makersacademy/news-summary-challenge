(function(exports) {

  var mockAPI = {
    runRequest: function() {
      return "Angry Tiger loose in London!"
    }
  }

  var list = new HeadlinesList();
  var headline = "Angry Tiger loose in London!";


  function testsHeadlineRequest() {
    console.log("Tests that a headline appears after XHR request")
    assert.isTrue(mockAPI.runRequest() === headline);
  };

  runTests = function() {
    testsHeadlineRequest();
  };

  runTests();
})(this);
