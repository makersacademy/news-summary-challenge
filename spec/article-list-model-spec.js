describe("ArticleList", () => {
  describe(".addArticle", ()=> {
    it("should add an article to the list", () => {

      articleList = new ArticleList()
      articleList.addArticle(guardian_api_seed[0])

      expect(articleList.getArticles()).toHaveLength(1)
    });

    it("should add multiple articles to the list", () => {

      articleList = new ArticleList()
      articleList.addArticle(guardian_api_seed[0])
      articleList.addArticle(guardian_api_seed[1])

      expect(articleList.getArticles()).toHaveLength(2)
    });
  });
});