describe('News Class', () => {

  describe("#new", () => {
    it("Should be new instance of news", () => {
      var news = new News();
      expect(news).isTrue();
    })
  });

  describe('#add', () => {
    it("Allows an article to be added", () => {
      var news = new News();
      news.add("First Article")
      expect(news.getArticles()).toEqual(["First Article"]);
    })

    it("Can add multiple articles", () => {
      var news = new News();
      news.add("First Article")
      news.add("Second Article")
      expect(news.getArticles()).toEqual(["First Article", "Second Article"])
    })
  });

})
