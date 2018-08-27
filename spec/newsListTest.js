'use strict';

describe('NewsList', function() {
  it('shows a list of news stories', function() {
    var newsList = new NewsList;
    newsList.addToList("headline", "date", "url", "content")
    expect(newsList._newsStories[0].headline()).toBe("headline")
  })

  it('converts the stories to the correct HTML for display purposes', function() {
    var newsList = new NewsList()
    newsList.addToList("headline", "date", "url", "content")
    var newsListView = new NewsListView(newsList)
    expect(newsListView.htmlParser()).toBe('<ul><li><div><a href="http://localhost:8080#newsStories/1">headline</a></div></li></ul>')
  })
})
