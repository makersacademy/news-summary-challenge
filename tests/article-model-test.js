(function(exports) {
  var article = new Article("Headline", "www.fakeurl.example", "Body");

  function testArticleHeadlineDisplayed() {
    assert.isTrue(article.displayHeadline() === "Headline", "Article headline is displayed");
  };

  function testArticleURLDisplayed() {
    assert.isTrue(article.displayURL() === "www.fakeurl.example", "Article URL is displayed");
  };

  function testArticleBodyDisplayed() {
    assert.isTrue(article.displayBody() === "Body", "Article body is displayed");
  };

  testArticleHeadlineDisplayed();
  testArticleURLDisplayed()
  testArticleBodyDisplayed()
})(this);
