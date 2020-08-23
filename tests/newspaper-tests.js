(function(exports){
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

  function articleIdTest() {
    var newspaper = new Newspaper();
    newspaper.addArticle('firstArticle');
    newspaper.addArticle('secondArticle');
    newspaper.addArticle('thirdArticle');

    assert.isTrue(newspaper.articles()[0].articleID() === 0);
    assert.isTrue(newspaper.articles()[1].articleID() === 1);
    assert.isTrue(newspaper.articles()[2].articleID() === 2);
  }
  articleIdTest();
})(this);
