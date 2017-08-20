describe("Article View", function() {
  var mockArticle, HTMLString, articleView;

  mockArticle = new MockObject('article', ['headline',
                                           'summary',
                                           'publicationDate']);
  mockArticle.headline().returnValue('Example Headline');
  mockArticle.summary().returnValue('Example content');
  HTMLString = "<h1>Example Headline</h1><div class='article-text'><p>Example content</p></div>"
  articleView = new ArticleView();

  it("returns an HTML string for a single article", function() {
    assert.isTrue(articleView.returnHTML(mockArticle) === HTMLString)
  });
});
