describe("Headline view", function() {

  var HTMLString = ["<ul>",
                      "<li><div>" + headlines[0].headline + " - <a href='" + headlines[0].url,
                        "' target='_blank'>Go to full link</a></div></li>",
                      "<li><div>" + headlines[1].headline + " - <a href='" + headlines[1].url,
                        "' target='_blank'>Go to full link</a></div></li>",
                      "<li><div>" + headlines[2].headline + " - <a href='" + headlines[2].url,
                        "' target='_blank'>Go to full link</a></div></li>",
                      "<li><div>" + headlines[3].headline + " - <a href='" + headlines[3].url,
                        "' target='_blank'>Go to full link</a></div></li>",
                      "<li><div>" + headlines[4].headline + " - <a href='" + headlines[4].url,
                        "' target='_blank'>Go to full link</a></div></li>",
                      "</ul>"].join("")

  var headlineParserMock = new MockObject('headlineParser', ['extractHeadlines']);
  headlineParserMock.extractHeadlines().returnValue(headlines);
  var headlineView = new HeadlineView(headlineParserMock);

  it("is initialized with a headline parser", function() {
    assert.isTrue(headlineView.parser = headlineParserMock);
  });

  it("returns an HTML string from the parsed content of guardian API", function() {
    assert.isTrue(headlineView.returnHTML(headlineParserMock.extractHeadlines()) === HTMLString);
  })
});
