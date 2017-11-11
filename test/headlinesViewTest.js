(function(exports) {
  var mockHeadline = "Theresa May quits"

  var mockHeadlineList = {
  returnHeadlines: function() {
    return [mockHeadline];
    }
  }

  var headlinesView = new HeadlinesView

  function testsInstantiation() {
    console.log("Model instantiates")
    assert.isTrue(headlinesView.constructor === HeadlinesView);
  };
  testsInstantiation();
})(this);
