(function() {
  
  (function() {
    var description = "HeadlineView turns a Headline object into a string of HTML with a link to the article and a thumbnail image"

    // is this a good idea??
    // seems to work
    function HeadlineMock(options) {
      this.getHeadline = function () {
        return options.headline
      }
      this.getURL = function () {
        return options.url
      }
      this.getThumbnail = function () {
        return options.thumbnail
      }
    }

    var headline = new HeadlineMock({
      headline: "This is the news",
      url: "google.com",
      thumbnail: "thumbnail-url"
    })
    var view = new HeadlineView(headline)

    assert.isTrue(
      view.getHTML() === '<div class="headline"><img src="thumbnail-url"><a href="google.com" target="_blank">This is the news</a></div>',
      description
    )
  })()

})()
