(function() {
  
  (function() {
    var description = "HeadlineView turns a Headline object into a string of HTML"

    // is this a good idea??
    function HeadlineMock(options) {
      this.getHeadline = function () {
        return options.headline
      }
    }

    var headline = new HeadlineMock({ headline: "This is the news" })
    var view = new HeadlineView(headline)
    assert.isTrue(
      view.getHTML() === '<div class="headline">This is the news</div>',
      description
    )
  })()

})()
