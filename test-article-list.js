function testArticleListInstantiation() {
    var articleList = new ArticleList();
    assert.isTrue(articleList.list instanceof Array)
  }
testArticleInstantiation();