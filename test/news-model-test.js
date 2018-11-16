describe("a news-model", function() {
  it("can create a news story", function() {
    var news = new News("test news story");
    expect(news).isInstanceOf(News)
  })
})
