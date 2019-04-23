(function() {
  
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
    this.getID = function () {
      return options.id
    }
  }

  var headline = new HeadlineMock({
    headline: "This is the news",
    url: "google.com",
    thumbnail: "thumbnail-url",
    id: "the-id"
  })
  var view = new HeadlineView(headline);

  (function() {
    var description = "HeadlineView turns a Headline object into a string of HTML with a link to the article"

    assert.isTrue(
      view.getHTML().includes('<a href="google.com" target="_blank">This is the news</a>'),
      description
    )
  })();

  (function() {
    var description = "... and an image"

    assert.isTrue(
      view.getHTML().includes('<img src="thumbnail-url">'),
      description
    )
  })();

  (function() {
    var description = "... and a link to see the summary"

    assert.isTrue(
      view.getHTML().includes('View summary') &&
      view.getHTML().includes('href="#the-id"'),
      description
    )
  })()
})()
