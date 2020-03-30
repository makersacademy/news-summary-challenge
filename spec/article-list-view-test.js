(function newArticleListView() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.articleList instanceof ArticleList);
  console.log("Test 2 Passing");
})();

(function testHTMLIfy() {
  var articleList = new ArticleList("www.test.com", "image");
  var articleListView = new ArticleListView(articleList);
  articleList.addArticle("Test");
  assert.isTrue(
    articleListView.htmlIfy() ===
      "<div id='article'><img src='image'/><br><a href='www.test.com'>Test</a></div>"
  );
  console.log("Test 3 Passing");
})();
