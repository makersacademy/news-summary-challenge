function testArticleListInstantiation() {
  var articleList = new ArticleList();
  assert.isTrue(articleList.list instanceof Array)
}
testArticleInstantiation();

function testCreateAndStore() {
  var articleList = new ArticleList();
  var article = new Article();
  articleList.createAndStore(article)
  assert.isTrue(articleList.list === [article])
}