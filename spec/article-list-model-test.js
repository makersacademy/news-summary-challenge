(function newArticleList(){
var articleList = new ArticleList();
assert.isTrue(articleList.listOfArticles.length === 0);
})();

(function newAddArticle(){
  var articleList = new ArticleList();
  articleList.addArticle("Test Headline");
  assert.isTrue(articleList.listOfArticles.length === 1)
  assert.isTrue(articleList.listOfArticles[0] instanceof Article)
  assert.isTrue(articleList.listOfArticles[0].showHeadline().includes("Test Headline"))
})();