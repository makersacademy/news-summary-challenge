describe("headline parser", function() {

  var headlineParser = new HeadlineParser();

  it("can be initialized", function() {
    assert.isTrue(headlineParser instanceof HeadlineParser);
  });

  it("extracts headlines from a JSON string", function() {
    headlineParser.extractHeadlines(exampleResponse).forEach(function(extractedHeadline, index) {
      assert.isTrue(extractedHeadline === headlines[index]);
    });
  });
})
