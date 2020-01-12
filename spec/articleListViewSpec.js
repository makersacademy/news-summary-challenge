var testGetHtmlString = (function() {
  var articleListDouble = new ArticleListDouble()
  var articleListView = new ArticleListView(articleListDouble)
  assert.isTrue(articleListView.htmlString() === "<li>Title</li><li>Title</li>")
  assert.isTrue(articleListView._articleList.articlesCallCount === 1)
})()
