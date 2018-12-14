describe("ArticleList model", function() {

  articleListDoubleSetup();

  describe(".articleList", function() {
    it("Should return an array", function() {
      expect(newsList.articleList).isArray(true);
    })

    // it("Should conatin a list of objects", function() {
    //   expect(newsList.articleList[0]).isObject(true);
    // })
  })

  describe(".createArticleList", function() {
    it("should make a succesful call to the guardian api for uk news", function() {
      newsList.createArticleList(testArray);
      console.log(newsList.articleList);
      expect(newsList.articleList[0].sectionId).toEqual("uk-news");
      expect(newsList.articleList[0].type).toEqual("article");
    })
  })

})
