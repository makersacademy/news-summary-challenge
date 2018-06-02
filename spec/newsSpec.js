describe("Headlines", function () {
  var headlines = new Headlines();
  it("is empty", function () {
    assert.isEmpty(headlines.headlinesArray)
  });
  it("is an empty array", function () {
    assert.isAnArray(headlines.headlinesArray)
  });
  it("contains a headline when one is added", function () {
    headlines.addHeadline("Test Headline: Bacon is Good For You!")
    assert.arrayContains(headlines.headlinesArray, "Test Headline: Bacon is Good For You!")
  });
  it("returns a headlines", function () {
    headlines.returnFromHeadlinesArray();
    console.log(headlines.headlinesArray[0])
    console.log(headlines.returnFromHeadlinesArray());
  });
})
