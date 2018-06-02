describe("Headlines", function () {
  var headlines = new Headlines();
  it("is an empty array", function () {
    assert.isEmpty(headlines.headlinesArray)
  });
  it("contains a headline when one is added", function () {
    headlines.addHeadline("Test Headline: Bacon is Good For You!")
    assert.arrayContains(headlines.headlinesArray, "Test Headline: Bacon is Good For You!")
  });
})
