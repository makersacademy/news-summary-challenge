(function(){
  test.describe("NewsSummaryModel", function(){

    var title = 'test title';
    var url = 'text.url.com';
    var date = "2017-08-20";
    var article = new ArticleModel(title, url, date);

    test.it("is initialized with a headline", function() {
      assert.isTrue(article.displayTitle() === "test title");
    });
    test.it("is initialized with an external URL", function() {
      assert.isTrue(article.displayUrl() === "text.url.com");
    });
    test.it("is initialized with a publication date", function() {
      assert.isTrue(article.displayDate() === "2017-08-20");
    });
  });
})();
