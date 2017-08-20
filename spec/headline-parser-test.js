describe("headline parser", function() {
  var mockArticleCreateCount = 0;
  function MockArticle() {
    mockArticleCreateCount++;
  };

  var mockArticleCollection = new MockObject('articleCollection',
                                             ['createArticle',
                                              'getArticleById',
                                              'articles']);
  mockArticleCollection.getArticleById().returnValue(new MockArticle);

  var headlineParser = new HeadlineParser(mockArticleCollection);

  it("is initialized with an article collection", function() {
    assert.isTrue(headlineParser.articleCollection === mockArticleCollection);
  });

  headlineParser.extractArticles(exampleResponse);
  it("asks article collection to create new articles based off parsed JSON", function() {
    assert.isTrue(mockArticleCollection.createArticleCallCount === 5);
  });
  it("returns ", function() {

    assert.isTrue(mockArticleCollection.createArticleCallCount === 5);
  });
});
