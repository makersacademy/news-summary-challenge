(function newArticleController() {
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  var articleController = new ArticleController(articleListView);
  articleList.addArticle("Test 1");
  articleList.addArticle("Test 2");
  assert.isTrue(
    articleController.articleListView.htmlIfy() ===
      "<ul><li><div><a href='#0'>Test 1</a></div></li><li><div><a href='#1'>Test 2</a></div></li></ul>"
  );
  console.log("Test 6 Passing");
})();

(function testInsert() {
  var fakeDiv = {
    innerHTML: ""
  };
  var fakeDocument = {
    getElementById: function() {
      return fakeDiv;
    }
  };
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  var articleController = new ArticleController(articleListView, fakeDocument);
  articleList.addArticle("Test");
  articleController.insert();
  assert.isTrue(fakeDiv.innerHTML.includes("Test"));
  console.log("Test 7 Passing");
})();

(function testGetArticles() {
  var fakeDiv = {
    innerHTML: ""
  };
  var fakeDocument = {
    getElementById: function() {
      return fakeDiv;
    }
  };
  var articleList = new ArticleList();
  var articleListView = new ArticleListView(articleList);
  var articleController = new ArticleController(articleListView, fakeDocument);
  articleController.getArticles();
  assert.isTrue(fakeDiv.innerHTML.includes(""));
  console.log("Test 8 Passing");
})();
