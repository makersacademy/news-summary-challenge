describe("a news-model", function() {
  it("can create a news story", function() {
    var news = new News("test news story");
    expect(news).isInstanceOf(News)
  })
  it("can display the title", function() {
    var news = new News("another test story")
    expect(news.displayText()).isEqualTo("another test story")
  })
})
