function testGetArticleTitle() {
  var article = new Article("Title")
  assert.isTrue(article.title() === "Title")
}

testGetArticleTitle();
