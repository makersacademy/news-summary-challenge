(function() {
  let article = new Article('This is a headline', 'myurl.com')
  let articleView = new ArticleView(article)

  function testSingleArticleView() {
    assert.isTrue(articleView.returnHTMLstring() === '<ul><li><div>' + article.headline + '</div></li></ul>')
  }

  testSingleArticleView()

})()
