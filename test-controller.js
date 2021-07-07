function testControllerInstantiatedWithArticleView() {
  var controller = new Controller();
  assert.isTrue(controller.view = new ArticleView())
}
testControllerInstantiatedWithArticleView();

function testSummaryView() {
  document2Builder();
  var controller = new Controller();
  var articleView = new ArticleView();
  var article1 = new Article();
  article1.title = "Title One"
  article1.body = "Body One"
  var article2 = new Article();
  article2.title = "Title Two"
  article2.body = "Body Two"
  controller.view.list.list = [article1, article2]
  var div = document2.getElementById("summary")
  div.innerHTML = controller.view.render()
  assert.isTrue(div.innerHTML === '<div class="n0"><h3>Title One</h3><br></div><br><div class="n1"><h3>Title Two</h3><br></div><br>')
}
testSummaryView();

function document2Builder() {
  document2 = document.implementation.createHTMLDocument()
  var div = document2.createElement('div')
  div.id = "summary"
  document2.body.append(div)
  return document2
}

function testloadUp() {
  var controller = controller()
  assert.isTrue(document.getElementsByClassName('n3') === controller.view.list.list[2].title)
}