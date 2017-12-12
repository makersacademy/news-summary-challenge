function DoubleArticle(url, id, title, thumbnail, body) {

}

describe('It sets the article class to the article property', function() {
  articleList = new ArticleList(DoubleArticle)
  return assert.isTrue(articleList._article === DoubleArticle)
});

describe('It can create a new article when given all necessary inputs', function() {
  articleList = new ArticleList(DoubleArticle)
  articleList.createNewArticleAndAddToList("url", "id", "title", "thumbnail", "body")
  return assert.isTrue(articleList.returnAllArticles()[0] instanceof DoubleArticle)
});
