(function(exports){
  function ArticleDouble() {
    this.contents = 'I am a fake note';
  };
  article = new ArticleDouble();

  function newspaperTest() {
    let newspaper = new Newspaper();
    assert.isTrue(newspaper.articles().length === 0);
  };
  newspaperTest();

  function addArticleTest() {
    let newspaper = new Newspaper();
    newspaper.addArticle('Test Article');
    assert.isTrue(newspaper.articles().length === 1);
    assert.isTrue(newspaper.articles()[0] instanceof Article);
    assert.isTrue(newspaper.articles()[0].content() === 'Test Article');
  }
  addArticleTest();
})(this);
