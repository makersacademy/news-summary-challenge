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
  assert.isTrue(articleView.render() === "<div class='n0'><h3>Title One</h3><br></div><br><div class='n1'><h3>Title Two</h3><br></div><br>")
}
testRender();

