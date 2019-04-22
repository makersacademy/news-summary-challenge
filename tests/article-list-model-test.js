function testCanBeInstantiated() {
  var articleList = new ArticleList();
  assert.isTrue("ArticleList can be instantiated", articleList instanceof ArticleList);
}

testCanBeInstantiated();

function testCanAddArticleToList() {
  var articleList = new ArticleList();
  articleList.add({title: "Test title 1", url: "Test url 1", picture: "Test picture 1"})
  articleList.add({title: "Test title 2", url: "Test url 2", picture: "Test picture 2"})
  assert.isTrue("ArticleList: add new articles", articleList.articles.length === 2)
}

testCanAddArticleToList();
