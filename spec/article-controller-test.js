(function newArticleController(){
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  var articleController = new ArticleController(articleListView);
  articleList.addArticle("Test 1");
  articleList.addArticle("Test 2");
  assert.isTrue(articleController.articleListView.htmlIfy() === "<ul><li><div>Test 1</div></li><li><div>Test 2</div></li></ul>")
})();