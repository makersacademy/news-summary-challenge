describe("Article Class", () => {
  describe("#new", () => {
    it("Should be new instance of article", () => {
      var article = new Article("Headline", "Image URL", "Story");
      expect(article).isTrue();
    })
  })

  describe("#getHeadline", () => {
    it("Should return the headline of an article", () => {
      var article = new Article("Headline", "Image URL", "Story");
      expect(article.getHeadline()).toEqual("Headline");
    })
  })

  describe("#getImageURL", () => {
    it("Should return the url of an articles image", () => {
      var article = new Article("Headline", "Image URL", "Story");
      expect(article.getImageURL()).toEqual("Image URL");
    })
  })

  describe("#getStory", () => {
    it("Should return the story of an article", () => {
      var article = new Article("Headline", "Image URL", "Story");
      expect(article.getStory()).toEqual("Story");
    })
  })
})
