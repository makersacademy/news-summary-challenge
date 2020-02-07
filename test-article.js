function testArticleInstantiation() {
    var article = new Article();
    assert.isTrue(article.body === "a")
    assert.isTrue(article.title === "b")
  }
testArticleInstantiation();