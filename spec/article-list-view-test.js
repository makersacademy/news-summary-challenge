
(function newArticleListView(){
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  assert.isTrue(articleListView.articleList instanceof ArticleList)
})();

(function testHTMLIfy(){
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  articleList.addArticle("Test");
  articleList.addArticle("Test two");
  assert.isTrue(articleListView.htmlIfy() === "<ul><li><div>Test</div></li><li><div>Test two</div></li></ul>")
})();