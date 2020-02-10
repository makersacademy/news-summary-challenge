(function newArticleController(){
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  var articleController = new ArticleController(articleListView);
  articleList.addArticle("Test 1");
  articleList.addArticle("Test 2");
  assert.isTrue(articleController.articleListView.htmlIfy() === "<ul><li><div>Test 1</div></li><li><div>Test 2</div></li></ul>")
})();

(function testInsert(){
  var fakeDiv = {
    innerHTML: ""
  }
  var fakeDocument = {
    getElementById: function(){
      return fakeDiv
    }
  }
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  var articleController = new ArticleController(articleListView, fakeDocument);
  articleList.addArticle("Test");
  articleController.insert()
  assert.isTrue(fakeDiv.innerHTML.includes("Test"));
})();
