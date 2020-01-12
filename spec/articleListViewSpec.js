var testGetHtmlString = (function() {
  var articleListDouble = new ArticleListDouble()
  var articleListView = new ArticleListView(articleListDouble)
  var got = articleListView.toHtml()
  var expected = '<li><a href="www.url.com">Title</a></li>'
  assert.isTrue(got === expected)
  assert.isTrue(articleListView._articleList.articlesCallCount === 1)
})()
