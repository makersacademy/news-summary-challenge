var testCreateArticleList = (function() {
  var articleListDouble = new ArticleListDouble()
  var articleListViewDouble = new ArticleListViewDouble(articleListDouble)
  var guardianApiRequestDouble = new XMLHttpRequestDouble()
  var articleListController = new ArticleListController(articleListDouble, articleListViewDouble, guardianApiRequestDouble)
  articleListController.fetchArticleList()
  assert.isTrue(articleListController._articleList.articles().length === 1)
  assert.isTrue(articleListController._articleList.addArticleCallCount === 1)
  assert.isTrue(articleListController._guardianApiRequest.openCallCount === 1)
  assert.isTrue(articleListController._guardianApiRequest.sendCallCount === 1)
  // assert.isTrue(articleListController._request.onloadCallCount === 1)
})()

testRenderArticleList = (function() {
  var articleListDouble = new ArticleListDouble()
  var articleListViewDouble = new ArticleListViewDouble(articleListDouble)
  var articleListController = new ArticleListController(articleListDouble, articleListViewDouble)
  articleListController.renderArticleList()
  var got = document.getElementById("article-list").innerHTML
  var expected = '<li><a href="www.url.com">Title</a></li>'
  assert.isTrue(got === expected)
  assert.isTrue(articleListViewDouble.toHtmlCallCount === 1)
  assert.isTrue(articleListViewDouble.updateArticleListCallCount === 1)
})()
