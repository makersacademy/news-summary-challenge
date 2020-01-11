function testGetEmptyArticleList() {
  var articleList = new ArticleList()
  assert.isTrue(articleList.articles().length === 0)
}

testGetEmptyArticleList()
