describe("Headline view", function() {

  var mockArticle_0 = new MockObject('article', ['id', 'headline', 'url'])
  mockArticle_0.id().returnValue(0)
  mockArticle_0.headline().returnValue('exampleHeadline_0')
  mockArticle_0.url().returnValue('www.example.com')

  var mockArticle_1 = new MockObject('article', ['id', 'headline', 'url'])
  mockArticle_1.id().returnValue(1)
  mockArticle_1.headline().returnValue('exampleHeadline_1')
  mockArticle_1.url().returnValue('www.example.com')

  var HTMLString = ["<h1>Headlines</h1><div id='headlines'>",
                      "<h2><a href='#/articles/0'>" + 'exampleHeadline_0',
                        "</a> - <a href='www.example.com",
                          "' target='_blank'>Go to full link</a></h2>",
                      "<h2><a href='#/articles/1'>" + 'exampleHeadline_1',
                        "</a> - <a href='www.example.com",
                          "' target='_blank'>Go to full link</a></h2>",
                      "</div>"].join("")

  var headlineParserMock = new MockObject('headlineParser', ['extractArticles']);
  headlineParserMock.extractArticles().returnValue([mockArticle_0, mockArticle_1]);
  var headlineView = new HeadlineView(headlineParserMock);

  it("is initialized with a headline parser", function() {
    assert.isTrue(headlineView.parser = headlineParserMock);
  });

  it("returns an HTML string from the parsed content of guardian API", function() {
    assert.isTrue(headlineView.returnHTML(headlineParserMock.extractArticles()) === HTMLString);
  })
});
