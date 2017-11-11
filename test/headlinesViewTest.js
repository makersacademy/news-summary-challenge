(function(exports) {
  var mockHeadline = "Theresa May quits"

  var mockHeadlineList = {
  returnHeadlines: function() {
    return [mockHeadline];
    }
  }

  var headlinesView = new HeadlinesView(mockHeadlineList)

  function testsInstantiation() {
    console.log("Model instantiates")
    assert.isTrue(headlinesView.constructor === HeadlinesView);
  };
  testsInstantiation();

  function testsConvertsToHTML() {
    console.log("Converts headline to HTML");
    var expectedHtml = "<ul><li><div>Theresa May quits</div></li></ul>"
    var actualHtml = headlinesView.toHTML();
    assert.isTrue(expectedHtml === actualHtml);
  };
  testsConvertsToHTML();
})(this);
