describe("headline parser", function() {
  var mockArticleCreateCount = 0;
  function MockArticle() {
    mockArticleCreateCount++;
  };

  var mockArticleCollection = new MockObject('articleCollection', ['createArticle']);

  var headlineParser = new HeadlineParser(mockArticleCollection);

  it("is initialized with an article collection", function() {
    assert.isTrue(headlineParser.articleCollection === mockArticleCollection);
  });

  it("extracts headlines from a JSON string", function() {
    headlineParser.extractHeadlines(exampleResponse).forEach(function(extractedHeadline, index) {
      assert.isTrue(extractedHeadline.headline === headlines[index].headline);
    });
  });
});
