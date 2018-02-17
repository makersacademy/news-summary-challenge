(function testArticleCreation() {

  var article = new Article('url', 'headline', 'text', 'thumbnail')

  it("should create an article with a url", function() {
    jennifer.expects(article.url).toEqual("url")
  });

  it("should create an article with a headline", function() {
    jennifer.expects(article.headline).toEqual("headline")
  });

  it("should create an article with text", function() {
    jennifer.expects(article.text).toEqual("text")
  });

  it("should create an article with a thumbnail", function() {
    jennifer.expects(article.thumbnail).toEqual("thumbnail")
  });

})();
