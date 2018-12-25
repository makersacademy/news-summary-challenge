'use strict';

var newsArticleModel = {
  headline: function() { return 'news headline' },
  thumbnail: function() { return 'image' }
}
var newsArticleListModel = { list: [newsArticleModel] }

var newsArticleListView = new NewsArticleListView(newsArticleListModel)

tea.describe('news article list view', function() {
  tea.it('renders a list of news articles', function() {
    var expected = "<div class='container text-center'><h1>NewsFeed</h1></div><div class='container card-columns text-center'><div class='card mb-2' style='max-width: 30rem;'><img class='card-img-top' src=image><div class='card-body'><a class='btn btn-primary' href='#'>news headline</a></div></div></div>"
    var result = newsArticleListView.render([newsArticleModel]);
    tea.check(expected === result)
  })
})
