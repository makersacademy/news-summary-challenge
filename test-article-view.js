function testArticleViewInstantiation() {
  var articleView = new ArticleView();
  assert.isTrue(articleView.list instanceof ArticleList)
}
testArticleViewInstantiation();

function testRender() {
  var articleView = new ArticleView();
  var article1 = new Article();
  article1.title = "Title One"
  article1.body = "Body One"
  var article2 = new Article();
  article2.title = "Title Two"
  article2.body = "Body Two"
  articleView.list.list = [article1, article2]
  assert.isTrue(articleView.render() === "<div id='0'><h1>Title One</h1><br></div><br><div id='1'><h1>Title Two</h1><br></div><br>")
}
testRender();

