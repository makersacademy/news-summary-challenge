function testCreatesAnEmptyHTMLDiv() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView();
  assert.isTrue("ArticleListView creates empty HTML div", articleListView.createHTML() === "<div></div>")
}

testCreatesAnEmptyHTMLDiv();
