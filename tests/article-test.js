(function(exports) {

  function testArticleShowHeadline() {

    let article = new Article("A Headline");

    assert.isTrue(article.showHeadline() === "A Headline", "Article Headline is shown");
  }

  function testArticleShowUrl() {

    let article = new Article("A Headline", "http://test.com");

    assert.isTrue(article.showUrl() === "http://test.com", "Article URL is shown")
  }

  testArticleShowHeadline();
  testArticleShowUrl();
})(this);