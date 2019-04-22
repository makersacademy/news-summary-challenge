(function() {
  
  (function() {
    var description = "HeadlineView turns a Headline object into a string of HTML with a link to the article"

    // is this a good idea??
    // seems to work
    function HeadlineMock(options) {
      this.getHeadline = function () {
        return options.headline
      }
      this.getURL = function () {
        return options.url
      }
    }

    var headline = new HeadlineMock({
      headline: "This is the news",
      url: "google.com"
    })
    var view = new HeadlineView(headline)

    assert.isTrue(
      view.getHTML() === '<div class="headline"><a href="google.com" target="_blank">This is the news</a></div>',
      description
    )
  })()

})()
