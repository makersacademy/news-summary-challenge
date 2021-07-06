describe("News list", function() {
  it("creates a news list", function() {
    var newsList = new NewsList();
    expect(newsList.getNewsItems()).isInstanceOf(Array)
  })
  it("can add news to the list", function() {
    var newsList = new NewsList();
    newsList.addNewsItem("Trump shits himself in public!")
    expect(newsList.getNewsItems()[0].displayText()).isEqualTo("Trump shits himself in public!")
  })
})
