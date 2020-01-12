var testGetEmptyArticleList = (function() {
  var articleList = new ArticleList()
  assert.isTrue(articleList.articles().length === 0)
})()

var testAddArticle = (function() {
  var articleList = new ArticleList(ArticleDouble)
  articleList.addArticle("Title", "www.url.com")
  assert.isTrue(articleList.articles().length === 1)
  assert.isTrue(articleList.articles()[0].title() === "Title")
  assert.isTrue(articleList.articles()[0].url() === "www.url.com")
  assert.isTrue(articleList.articles()[0].titleCallCount === 1)
  assert.isTrue(articleList.articles()[0].urlCallCount === 1)
})()
