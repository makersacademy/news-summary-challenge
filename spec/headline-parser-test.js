'use strict';

describe("headline parser", function() {
  var mockArticleCreateCount, mockArticleCollection;
  var returnValue, headlineParser;

  mockArticleCreateCount = 0;
  function MockArticle() {
    mockArticleCreateCount++;
  };

  mockArticleCollection = new MockObject('articleCollection',
                                             ['createArticle',
                                              'getArticleById',
                                              'articles']);
  mockArticleCollection.getArticleById().returnValue(new MockArticle);

  headlineParser = new HeadlineParser(mockArticleCollection);

  it("is initialized with an article collection", function() {
    assert.isTrue(headlineParser.articleCollection === mockArticleCollection);
  });

  returnValue = headlineParser.extractArticles(JSON.stringify(exampleResponse));
  it("asks article collection to create new articles based off parsed JSON", function() {
    assert.isTrue(mockArticleCollection.createArticleCallCount === 5);
  });
  it("returns the article collection", function() {
    assert.isTrue(returnValue === mockArticleCollection);
  });
});
