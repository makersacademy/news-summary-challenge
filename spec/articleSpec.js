(function testArticleCreation() {

  article = new Article('id', 'url', 'headline', 'body', 'thumbnail')

  it("should create an article with an id", function() {
    jennifer.expects(article.getId()).toEqual("id")
  });

  it("should create an article with a url", function() {
    jennifer.expects(article.getUrl()).toEqual("url")
  });

  it("should create an article with a headline", function() {
    jennifer.expects(article.getHeadline()).toEqual("headline")
  });

  it("should create an article with a body", function() {
    jennifer.expects(article.getBody()).toEqual("body")
  });

  it("should create an article with a thumbnail", function() {
    jennifer.expects(article.getThumbnail()).toEqual("thumbnail")
  });

})();
