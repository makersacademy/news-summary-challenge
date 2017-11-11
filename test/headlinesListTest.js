(function(exports) {

  var headlinesList = new HeadlinesList();

  function testsInstantiation() {
    console.log("Testing Headlines List Instantiates");
    assert.isTrue(headlinesList.constructor === HeadlinesList);
  };

})(this);
