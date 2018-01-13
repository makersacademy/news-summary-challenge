(function(exports) {

  function DoubleArticle(headline, url, body) {};

  var doubleArticle = new DoubleArticle("Headline", "www.fakeurl.example", "Body")
  var newspaper = new Newspaper();

  function testArticleInNewspaperArray() {
    newspaper.addArticle(doubleArticle);
    assert.isTrue(newspaper.listOfArticles.length === 1, "Article is added to newspaper array");
  };

  testArticleInNewspaperArray();
})(this);
