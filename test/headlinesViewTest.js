(function(exports) {
  var mockHeadline = "Theresa May quits"

  var mockHeadlineList = {
  returnHeadlines: function() {
    return [mockHeadline];
    }
  }

  var headlinesView = new HeadlinesView(mockHeadlineList)

  function testsConvertsToHTML() {
    console.log("Converts headline to HTML");
    var expectedHtml = "<ul><li><div>Theresa May quits</div></li></ul>"
    var actualHtml = headlinesView.toHTML();
    assert.isTrue(expectedHtml === actualHtml);
  };

  runTests = function() {
    testsConvertsToHTML();
  };

  runTests();
})(this);
