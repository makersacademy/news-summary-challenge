(function testArticleListing() {

  articles = new Articles
  article1 = new Article('url1', 'headline1', 'body1', 'thumbnail1')
  article2 = new Article('url2', 'headline2', 'body2', 'thumbnail2')

  it("should be created with an empty array", function() {
    jennifer.expects(articles.getArticles()).toBeEmptyArray
  });

  it("should store an article", function() {
    articles.addArticle(article1)
    jennifer.expects(articles.getArticles()).toInclude(article1)
  });

  it("can store multiple articles", function() {
    articles.addArticle(article1)
    articles.addArticle(article2)
    jennifer.expects(articles.getArticles()).toInclude(article2)
  });

  it("can return properties of articles", function() {
    jennifer.expects(articles.getArticles()[1].getUrl()).toEqual("url1")
  });

})();
