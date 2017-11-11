(function(exports) {
  var mockHeadline = "Theresa May quits"

  var mockHeadlineView = {
    toHTML: function() {
      return "<ul><li><div>" + mockHeadline + "</ul></div></li>"
    }
  }

  var mockHeadlineController = {
    getView: function() {
      return mockHeadlineView
    },
    displayHeadlines: function() {
      var element = document.getElementById("allHeadlines")
      var currentView = this.getView();
      element.innerHTML = currentView.toHTML();
    }
  }

  function testsDisplayHeadlines() {
    console.log("Headlines are displayed")
    mockHeadlineController.displayHeadlines();
    var div = document.getElementById("allHeadlines");
    assert.isTrue(div.innerHTML === "<ul><li><div>" + mockHeadline + "</div></li></ul>");
  };

  runTests = function() {
    testsDisplayHeadlines();
  };

  runTests();

})(this);
