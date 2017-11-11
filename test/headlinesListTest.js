(function(exports) {

  var list = new HeadlinesList();

  function testsReturnAllHeadlines() {
    console.log("It returns a list of headlines");
    assert.isTrue(Array.isArray(list.returnHeadlines()));
  };

  function testsAddsHeadlines() {
    console.log("Headlines are added to the array");
    list.addHeadlines("Tiger on the loose in London!");
    assert.isTrue(list.returnHeadlines().toString() === "Tiger on the loose in London!");
  }

  runTests = function() {
    testsReturnAllHeadlines();
    testsAddsHeadlines();
  };

  runTests();
})(this);
