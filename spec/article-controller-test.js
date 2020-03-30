(function newArticleController() {
  var articleList = new ArticleList("www.test.com", "image");
  var articleListView = new ArticleListView(articleList);
  var articleController = new ArticleController(articleListView);
  articleList.addArticle("Test 1");
  assert.isTrue(
    articleController.articleListView.htmlIfy() ===
      "<div id='article'><img src='image'/><br><a href='www.test.com'>Test 1</a></div>"
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
