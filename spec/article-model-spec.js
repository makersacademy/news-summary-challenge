describe("ArticleModel", () => {
  describe(".getId", ()=> {
    it("should give a unique ID for each new article", () => {
      article1 = new ArticleModel()
      article2 = new ArticleModel() 

      expect(article2.getId()).toEq(article1.getId() + 1)
    });
  });

  describe(".getData", ()=> {
    it("should store the api data", () => {
      article1 = new ArticleModel(guardian_api_seed[0])

      expect(article1.getData()).toEq(guardian_api_seed[0])
    });
  });
});