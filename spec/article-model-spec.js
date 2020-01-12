describe("ArticleModel", () => {
  describe(".getID", ()=> {
    it("should give a unique ID for each new artivle", () => {
      article1 = new ArticleModel()
      article2 = new ArticleModel() 
      
      expect(article2.getID()).toEq(article1.getID() + 1)
    });
  });
});