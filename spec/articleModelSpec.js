var testGetArticleTitle = (function() {
  var article = new Article("Title")
  assert.isTrue(article.title() === "Title")
})()
