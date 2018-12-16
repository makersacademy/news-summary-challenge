describe("Headlines View", function() {

  describe(".htmlString()", function() {

    it("Should return html for a list of headlines", function() {
      headlines = new Headlines();
      headlines.addArticle("thumbnail.jpg", "section", "headline", "byline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
      headlines.addArticle("lianbmuht.jpg", "noitces", "enildaeh", "enilyb", "hpargaraPtsrif", "hpargaraPdnoces", "hpargaraPdriht", "lru");
      headlinesView = new HeadlinesView(headlines);
      expect(headlinesView.htmlString()).toEqual(
        "<div>" +
          "<img src='thumbnail.jpg' alt='article thumbnail'>" +
          "<h1>section &#x2F; headline</h1>" +
        "</div>" +
        "<div>" +
          "<img src='lianbmuht.jpg' alt='article thumbnail'>" +
          "<h1>noitces &#x2F; enildaeh</h1>" +
        "</div>"
      )
    })
  })
})