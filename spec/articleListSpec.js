(function testArticleListing() {

  articleList = new ArticleList
  article1 = new Article
  article2 = new Article

  it("should be created with an empty array", function() {
    jennifer.expects(articleList.getArticles()).toBeEmptyArray
  });

  it("should store an article", function() {
    articleList.addArticle(article1)
    jennifer.expects(articleList.getArticles()).toInclude(article1)
  });

  it("can store multiple articles", function() {
    articleList.addArticle(article1)
    articleList.addArticle(article2)
    jennifer.expects(articleList.getArticles()).toInclude(article2)
  });

})();
