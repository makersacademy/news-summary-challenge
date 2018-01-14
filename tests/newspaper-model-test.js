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

  function testReturnHeadlineFromList() {
    console.log(newspaper)
    console.log(newspaper.returnHeadlineFromList(0))
    assert.isTrue(newspaper.returnHeadlineFromList(0) === "Headline", "Headline is returned from listOfArticles array")
  };

  testArticleInNewspaperArray();
  testReturnHeadlineFromList()
})(this);
