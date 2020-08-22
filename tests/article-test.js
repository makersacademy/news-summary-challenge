(function(exports) {

  function testArticleShowHeadline() {

    let article = new Article("A Headline");

    assert.isTrue(article.showHeadline() === "A Headline", "Article Headline is displayed");
  }

  testArticleShowHeadline();
})(this);