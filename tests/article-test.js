(function(exports) {
  function testArticleIsAConstructor() {
    var article = new Article();

    assert.isTrue(article instanceof Article);
  };
  function testArticleShowHeadlineReturnsArticleHeadline() {
    var article = new Article("A Headline");

    assert.isTrue(article.showHeadline() === "A Headline");
  };

  testArticleIsAConstructor();
  testArticleShowHeadlineReturnsArticleHeadline();
})(this);