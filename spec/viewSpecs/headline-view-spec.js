(function() {

  describe("HeadlineView", function() {
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

    describe("turns a Headline object into formatted HTML, with...", function() {
      it("a link to the article", function() {
        expect(view.getHTML()).toContain('<a href="google.com" target="_blank">This is the news</a>')
      })

      it("a thumbnail image", function() {
        expect(view.getHTML()).toContain('<img src="thumbnail-url">')
      })

      it("a link to the summary", function() {
        expect(view.getHTML()).toContain('View summary')
        expect(view.getHTML()).toContain('href="#the-id"')
      })
    })
  })
})()
