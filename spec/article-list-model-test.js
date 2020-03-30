(function newArticleList() {
  var articleList = new ArticleList();
  assert.isTrue(articleList.showArticles().length === 0);
  console.log("Test 4 Passing");
})();

(function newAddArticle() {
  var articleList = new ArticleList();
  articleList.addArticle("Test Headline");
  assert.isTrue(articleList.showArticles().length === 1);
  assert.isTrue(articleList.listOfArticles[0].id === 0);
  assert.isTrue(articleList.showArticles()[0] instanceof Article);
  assert.isTrue(
    articleList.showArticles()[0].showHeadline() === "Test Headline"
  );
  console.log("Test 5 Passing");
})();
