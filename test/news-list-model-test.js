describe("News list", function() {
  it("creates a news list", function() {
    var newsList = new NewsList();
    expect(newsList.getNewsItems()).isInstanceOf(Array)
  })
})
