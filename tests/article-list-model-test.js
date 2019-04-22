function testCanBeInstantiated() {
  var articleList = new ArticleList();
  assert.isTrue("ArticleList can be instantiated", articleList instanceof ArticleList);
}

testCanBeInstantiated();
