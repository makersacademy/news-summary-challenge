(function testArticleListing() {

  article = new Article('url', 'headline', 'body', 'thumbnail')

  it("should be created with an empty array", function() {
    jennifer.expects(article.getArticles()).toBeEmptyArray
  });


})();
