(function(exports) {
  function testHeadlineFunctionReturnsHeadline() {
    var article = new Article("headline", "content", "url.com", "23 July");
    assert.isTrue(article.headline() === "headline");
  };

  testHeadlineFunctionReturnsHeadline();
})(this);
