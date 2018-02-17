(function testArticleListing() {

  list = new List
  article1 = new Article('url1', 'headline1', 'body1', 'thumbnail1')
  article2 = new Article('url2', 'headline2', 'body2', 'thumbnail2')

  it("should be created with an empty array", function() {
    jennifer.expects(list.getArticles()).toBeEmptyArray
  });

  it("should store an article", function() {
    list.addArticle(article1)
    jennifer.expects(list.getArticles()).toInclude(article1)
  });

  it("can store multiple list", function() {
    list.addArticle(article1)
    list.addArticle(article2)
    jennifer.expects(list.getArticles()).toInclude(article2)
  });

  it("can return properties of article", function() {
    jennifer.expects(list.getArticles()[1].getUrl()).toEqual("url1")
  });
})();
