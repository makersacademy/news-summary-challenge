describe("NewsListView", function() {
  it("outputs a list of headlines from the newsstories", function () {
    newsList = NewsList
    newsList.getNews()
    newsListView = NewsListView(newsList)
    expect(newsListView.render())
  })
})
