describe("Headline view", function() {

  var HTMLString = ["<ul>",
                      "<li><div>" + headlines[0] + "</div></li>",
                      "<li><div>" + headlines[1] + "</div></li>",
                      "<li><div>" + headlines[2] + "</div></li>",
                      "<li><div>" + headlines[3] + "</div></li>",
                      "<li><div>" + headlines[4] + "</div></li>",
                      "<li><div>" + headlines[5] + "</div></li>",
                      "<li><div>" + headlines[6] + "</div></li>",
                      "<li><div>" + headlines[7] + "</div></li>",
                      "<li><div>" + headlines[8] + "</div></li>",
                      "<li><div>" + headlines[9] + "</div></li>",
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
