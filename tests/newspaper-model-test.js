(function(exports) {
  var article = new Article("Headline", "www.fakeurl.example", "Body")
  var newspaper = new Newspaper();

  function testArticleInNewspaperArray() {
    newspaper.addArticle(article);
    assert.isTrue(newspaper.listOfArticles.length === 1, "Article is added to newspaper array");
  };

  testArticleInNewspaperArray();
})(this);
