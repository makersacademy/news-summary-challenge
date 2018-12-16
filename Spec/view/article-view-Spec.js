describe("Article View", function() {

  describe(".htmlString()", function() {
    it("Should return html for an article", function() {
      article = new Article("thumbnail.jpg", "section", "headline", "byline", "firstParagraph", "secondParagraph", "thirdParagraph", "url");
      articleView = new ArticleView(article);
      expect(articleView.htmlString()).toEqual(
        "<div>" +
          "<h2>section</h2>" +
          "<img src='thumbnail.jpg' alt='article thumbnail'>" +
          "<h1>headline</h1>" +
          "<h2>by byline</h2>" +
          "<p>firstParagraph</p>" +
          "<p>secondParagraph</p>" +
          "<p>thirdParagraph</p>" +
          "<a href='url'>Click here for the full Guardian article</a>" +
        "</div>"
      )
    })
  })
})
