describe("Headlines Model", function() {

  describe(".addArticle", function() {
    it("Should add an article to the list array", function() {
      headlines = new Headlines;
      headlines.addArticle("thumbnail", "section", "headline", "byline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
      expect(headlines.list[0].headline).toEqual("headline")
    })
  })
})
