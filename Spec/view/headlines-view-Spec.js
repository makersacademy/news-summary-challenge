describe("Headlines View", function() {

  describe(".htmlString()", function() {

    it("Should return html for a list of headlines", function() {
      headlines = new Headlines();
      headlines.addArticle("thumbnail.jpg", "headline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
      headlines.addArticle("lianbmuht.jpg", "enildaeh", "hpargaraPtsrif", "hpargaraPdnoces", "hpargaraPdriht", "lru");
      headlinesView = new HeadlinesView(headlines);
      expect(headlinesView.htmlString()).toEqual(
        "<div>" +
          "<img src='thumbnail.jpg' alt='article thumbnail'>" +
          "<h1>headline</h1>" +
        "</div>" +
        "<div>" +
          "<img src='lianbmuht.jpg' alt='article thumbnail'>" +
          "<h1>enildaeh</h1>" +
        "</div>"
      )
    })
  })
})