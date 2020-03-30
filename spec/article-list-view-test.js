(function newArticleListView() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.articleList instanceof ArticleList);
  console.log("Test 2 Passing");
})();

(function testHTMLIfy() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  articleList.addArticle("Test");
  articleList.addArticle("Test two");
  assert.isTrue(
    articleListView.htmlIfy() ===
      "<ul><li><div><a href='#0'>Test</a></div></li><li><div><a href='#1'>Test two</a></div></li></ul>"
  );
  console.log("Test 3 Passing");
})();
