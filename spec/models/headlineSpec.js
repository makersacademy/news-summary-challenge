describe("Headline", function() {
  it("has a text", function() {
    var headlineText = "JavaScript is great";
    var headline = new Headline(headlineText);

    assert(headline.getText(), headlineText);
  });
});