(function(exports) {

  var headlinesList = new HeadlinesList();

  function testsReturnAllHeadlines() {
    console.log("It returns a list of headlines");
    assert.isTrue(Array.isArray(headlinesList.returnHeadlines()));
  };
  testsReturnAllHeadlines();
})(this);
