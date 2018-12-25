'use strict';

var newsArticleModel = {
  headline: function() {
    return 'news headline'
  }
}

var newsArticleListModel = {
  list: [newsArticleModel]
}

var newsArticleListView = new NewsArticleListView(newsArticleListModel)

tea.describe('news article list view', function() {
  tea.it('renders a list of news articles', function() {
    var expected = "<h1>NewsFeed</h1><div><ul><a ref='#'>news headline<br></a></ul></div>"
    var result = newsArticleListView.render([newsArticleModel]);
    tea.check(expected === result)
  })
})
