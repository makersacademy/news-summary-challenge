(function testArticleIndex() {

  index = new ArticleIndex()

  it("should initialise with a value of 0", function() {
    jennifer.expects(index.index).toEqual(0)
  });

  it("should be able to increment", function() {
    index.increment()
    jennifer.expects(index.getIndex()).toEqual(1)
  });

})();
