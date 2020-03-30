(function newArticleListView() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.articleList instanceof ArticleList);
  console.log("Test 2 Passing");
})();

(function testHTMLIfy() {
  var articleList = new ArticleList("www.test.com");
  var articleListView = new ArticleListView(articleList);
  articleList.addArticle("Test");
  articleList.addArticle("Test two");
  assert.isTrue(
    articleListView.htmlIfy() ===
      "<ul><div><a href='www.test.com'>Test</a></div><div><a href='www.test.com'>Test two</a></div></ul>"
  );
  console.log("Test 3 Passing");
})();
