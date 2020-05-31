(function() {

  let headline = 'This is an article headline';
  let article = new Article(headline);

  function testArticleIsCreatedWithHeadline() {
    assert.isTrue(article.headline === headline);
  }

  function testShowArticle() {
    assert.isTrue(article.show() === article.headline)
  }

  testArticleIsCreatedWithHeadline();
  testShowArticle();
})(this)
