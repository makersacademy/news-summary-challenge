describe("view news list", function() {
  it("initializes with a NewsList object", function() {
    var newsListView = new NewsListView(new NewsList());
    expect(newsListView.newsList).isInstanceOf(NewsList);
  })
  it("renders the list of notes when there are 0 notes", function() {
    var newsListView = new NewsListView(new NewsList());
    expect(newsListView.renderNewsItems()).isEqualTo("<ul></ul>")
  })
})
