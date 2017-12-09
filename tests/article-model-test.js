(function (exports) {

  function testArticleIsCreated() {
    var article = new Article();
    assert.isTrue(article = new Article());
  };

    testArticleIsCreated();


  function theArticleReturnsAString() {
    var article = new Article('news story');
    assert.isTrue(article.getArticleText() === 'news story' )
  }

    theArticleReturnsAString();

})(this);
