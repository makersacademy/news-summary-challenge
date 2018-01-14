(function(exports) {

  function DoubleArticle(headline, url, body) {};

  DoubleArticle.prototype = {
    displayHeadline: function() {
      return "Headline";
    }
  };

  var doubleArticle = new DoubleArticle("Headline", "www.fakeurl.example", "Body")
  var newspaper = new Newspaper();
  newspaper.addArticle(doubleArticle);

  function testArticleInNewspaperArray() {
    assert.isTrue(newspaper.listOfArticles.length === 1, "Article is added to newspaper array");
  };

  testArticleInNewspaperArray();
})(this);
