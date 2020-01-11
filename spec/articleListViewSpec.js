var testGetHtmlString = (function() {
  var articleList = new ArticleListDouble()
  var articleListView = new ArticleListView(articleList)
  assert.isTrue(articleListView.htmlString() === "<li>Title</li><li>Title</li>")
})()
