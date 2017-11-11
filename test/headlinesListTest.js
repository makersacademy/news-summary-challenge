(function(exports) {

  var headlinesList = new HeadlinesList();

  function testsInstantiation() {
    console.log("Testing Headlines List Instantiates");
    assert.isTrue(headlinesList.constructor === HeadlinesList);
  };
  testsInstantiation();

  function testsReturnAllHeadlines() {
    console.log("It returns a list of headlines");
    assert.isTrue(Array.isArray(headlinesList.returnHeadlines()));
  };
  testsReturnAllHeadlines();
})(this);
