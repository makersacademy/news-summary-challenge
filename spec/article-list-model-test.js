(function newArticleList(){
  var articleList = new ArticleList();
  assert.isTrue(articleList.showArticles().length === 0);
})();

(function newAddArticle(){
  var articleList = new ArticleList();
  articleList.addArticle("Test Headline");
  assert.isTrue(articleList.showArticles().length === 1)
  assert.isTrue(articleList.showArticles()[0] instanceof Article)
  assert.isTrue(articleList.showArticles()[0].showHeadline() === "Test Headline")
})();
