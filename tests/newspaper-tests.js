(function(exports){
  function newspaperTest() {
    let newspaper = new Newspaper();
    assert.isTrue(newspaper.articles().length === 0);
  };
  newspaperTest();

  function addArticleTest() {
    let newspaper = new Newspaper();
    newspaper.addArticle('Test Article', 'url');
    assert.isTrue(newspaper.articles().length === 1);
    assert.isTrue(newspaper.articles()[0] instanceof Article);
    assert.isTrue(newspaper.articles()[0].articleTitle() === 'Test Article');
  }
  addArticleTest();

  function articleIdTest() {
    var newspaper = new Newspaper();
    newspaper.addArticle('firstArticle', 'url1');
    newspaper.addArticle('secondArticle', 'url2');
    newspaper.addArticle('thirdArticle', 'url3');

    assert.isTrue(newspaper.articles()[0].articleID() === 0);
    assert.isTrue(newspaper.articles()[1].articleID() === 1);
    assert.isTrue(newspaper.articles()[2].articleID() === 2);
  }
  articleIdTest();
})(this);
