var testGetArticleTitle = (function() {
  var article = new Article("Title", "www.url.com")
  assert.isTrue(article.title() === "Title")
})()

var testGetArticleUrl = (function() {
  var article = new Article("Title", "www.url.com")
  assert.isTrue(article.url() === "www.url.com")
})()
