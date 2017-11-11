(function(exports) {
  var mockHeadline = "Theresa May quits"

  var mockHeadlineView = {
    toHTML: function() {
      return "<ul><li><div>" + mockHeadline + "</ul></div></li>"
    }
  }

  var mockHeadlineController = {
    displayHeadlines: function() {
      var element = document.getElementById("allHeadlines")
      element.innerHTML = mockHeadlineView.toHTML();
    }
  }

  function testsDisplayHeadlines() {
    console.log("Headlines are displayed")
    mockHeadlineController.displayHeadlines();
    var element = document.getElementById("allHeadlines");
    assert.isTrue(element.innerHTML === "<ul><li><div>" + mockHeadline + "</div></li></ul>");
  };

  runTests = function() {
    testsDisplayHeadlines();
  };

  runTests();

})(this);
