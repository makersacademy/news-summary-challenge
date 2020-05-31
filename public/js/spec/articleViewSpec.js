(function() {
  let article = new Article('This is a heading')
  let articleView = new ArticleView(article)

  function testSingleArticleView() {
    assert.isTrue(articleView.returnHTMLstring() === '<ul><li><div>' + article.heading + '</div></li></ul>')
  }

  testSingleArticleView()

})()
