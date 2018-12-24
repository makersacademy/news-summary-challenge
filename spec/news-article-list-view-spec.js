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
    var expected = [
      "<div>",
        "<ul>",
          "<a ref='#'>" + 'news headline' + "</a>",
        "</ul>",
      "</div>"
    ].join(" ");
    var result = newsArticleListView.render();
    tea.check(expected === result)
  })
})
