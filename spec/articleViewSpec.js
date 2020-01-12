var testConvertArticleToHtmlStringSummary = (function() {
  var articleDouble = new ArticleDouble("Title", "www.url.com")
  var articleView = new ArticleView(articleDouble)
  var got = articleView.summaryToHtml()
  var expected = "This is the summary for the first article."
  assert.isTrue(got === expected)
})()
