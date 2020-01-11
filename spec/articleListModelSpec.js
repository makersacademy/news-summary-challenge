var testGetEmptyArticleList = (function() {
  var articleList = new ArticleList()
  assert.isTrue(articleList.articles().length === 0)
})()

var testAddArticle = (function() {
  var articleList = new ArticleList()
  articleList.addArticle("Title")
  assert.isTrue(articleList.articles().length === 1)
})()
