function testCreatesAnEmptyHTMLDiv() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  assert.isTrue("ArticleListView creates empty HTML div", articleListView.createHTML() === "<div></div>")
}

testCreatesAnEmptyHTMLDiv();

function testCreatesAnHTMLDivWithContent() {
  var articleList = new ArticleList();
  articleList.add({title: "Test title 1", url: "Test url 1", thumbnail: "Test picture 1"})
  var articleListView = new ArticleListView(articleList);
  assert.isTrue("ArticleListView creates HTML display of content", articleListView.createHTML() === `<div><img src="Test picture 1" href="Test url 1"><h4><a href="Test url 1">Test title 1</a></h4></div>`)
}

testCreatesAnHTMLDivWithContent();
