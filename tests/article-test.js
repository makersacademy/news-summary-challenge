(function(exports) {
  
  let article = new Article("A Headline", "http://test.com");

  function testArticleShowHeadline() {
    assert.isTrue(article.showHeadline() === "A Headline", "Article Headline is shown");
  }

  function testArticleShowUrl() {
    assert.isTrue(article.showUrl() === "http://test.com", "Article URL is shown")
  }

  testArticleShowHeadline();
  testArticleShowUrl();
})(this);
