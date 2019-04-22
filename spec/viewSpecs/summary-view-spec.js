(function() {

  var summary = {
    getThumbnail: function() { return "a thumbnail" },
    getHeadline: function() { return "a headline" },
    getSummary: function() { return "a summary" }
  }
  var view = new SummaryView(summary);

  (function() {
    var description = "SummaryView turns a Summary object into a string of html including a thumbnail"
    assert.isTrue(
      view.getHTML().includes('<img src="a thumbnail">'),
      description
    )
  })();

  (function() {
    var description = "... and a headline"
    assert.isTrue(
      view.getHTML().includes('a headline'),
      description
    )
  })();

  (function() {
    var description = "... and a summary"
    console.log(view.getHTML())
    assert.isTrue(
      view.getHTML().includes('a summary'),
      description
    )
  })();

})()
