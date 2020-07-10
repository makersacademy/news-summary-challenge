(function() {

  let articleList = new ArticleList();
  let headline = 'This is a headline';
  let url = "myurl.com";
  let article = new Article(headline, url);

  function testArticleListStoresArray() {
    assert.isTrue(articleList.list.length === 0)
  }

  function testArticleListCanAddArticle() {
    articleList.add(article);
    assert.isTrue(articleList.list[0].headline === headline)
  }

  function testArticleListShowsAllHeadlines() {
    articleList.add(article);
    assert.isTrue(articleList.listAll()[0].headline === headline)
  }

  function testArticleGetsId() {
    articleList.add(article);
    assert.isTrue(articleList.list[0].id === 0)
  }

  testArticleListStoresArray();
  testArticleListShowsAllHeadlines();
  testArticleListCanAddArticle();
  testArticleGetsId();

})()
