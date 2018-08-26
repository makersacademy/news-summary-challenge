describe('NewsListView', function() {
  it('displays the listed news stories on the index.html page', function() {
    var newsList = new NewsList();
    newsList.addToList("headline", "date", "url", "content");
    newsListView = new NewsListView(newsList);
    expect(newsListView.htmlParser()).toBe('<ul><li><div><a href="http://localhost:8080#articles/1">headline</a></div></li></ul>');
  })
})
