(function(exports) {
  function testArticleIsAConstructor() {
    var article = new Article();

    assert.isTrue(article instanceof Article);
  };

  testArticleIsAConstructor();
})(this);