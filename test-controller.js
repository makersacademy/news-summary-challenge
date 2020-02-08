function testControllerInstantiatedWithArticleView() {
  var controller = new Controller();
  assert.isTrue(controller.view = new ArticleView())
}
testControllerInstantiatedWithArticleView();

function testSummaryView() {
  var controller = new Controller();
  var articleView = new ArticleView();
  var article1 = new Article();
  article1.title = "Title One"
  article1.body = "Body One"
  var article2 = new Article();
  article2.title = "Title Two"
  article2.body = "Body Two"
  controller.view.list.list = [article1, article2]
  var div = document.getElementById("summary")
  controller.summaryView()
  assert.isTrue(div.innerHTML === '<div id="0"><h1>Title One</h1><br><p>Body One</p></div><br><div id="1"><h1>Title Two</h1><br><p>Body Two</p></div><br>')
}
testSummaryView();