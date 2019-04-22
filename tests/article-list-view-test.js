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
  assert.isTrue("ArticleListView creates HTML display of content", articleListView.createHTML() === `<div><a href="Test url 1"><img src="Test picture 1"></a><h4><a href="Test url 1">Test title 1</a></h4></div>`)
}

testCreatesAnHTMLDivWithContent();

function testCreatesAnHTMLDivWithMultipleArticles() {
  var articleList = new ArticleList();
  articleList.add({title: "Test title 1", url: "Test url 1", thumbnail: "Test picture 1"})
  articleList.add({title: "Test title 2", url: "Test url 2", thumbnail: "Test picture 2"})
  var articleListView = new ArticleListView(articleList);
  assert.isTrue("ArticleListView creates HTML display of content", articleListView.createHTML() === `<div><a href="Test url 1"><img src="Test picture 1"></a><h4><a href="Test url 1">Test title 1</a></h4><a href="Test url 2"><img src="Test picture 2"></a><h4><a href="Test url 2">Test title 2</a></h4></div>`)
}
