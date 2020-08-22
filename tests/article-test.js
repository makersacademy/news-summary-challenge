(function() {
  function testArticleIsAConstructor() {
    let article = new Article();

    assert.isTrue(article instanceof Article);
  };
  function testArticleShowHeadlineReturnsArticleHeadline() {
    let article = new Article("A Headline");

    assert.isTrue(article.showHeadline() === "A Headline");
  };

  testArticleIsAConstructor();
  testArticleShowHeadlineReturnsArticleHeadline();
})();