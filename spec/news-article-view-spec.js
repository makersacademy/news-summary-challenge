'use strict';

var newsArticleModel = {
  headline: function() {
    return 'news headline'
  },

  summary: function() {
    return 'news summary'
  }
}

var newsArticleView = new NewsArticleView(newsArticleModel)

tea.describe('news article view', function() {
  tea.it('renders a news article', function() {
    var expected = [
      "<div>",
        "<h1>",
          'news headline',
        "</h1>",
        "<p>",
          'news summary',
        "</p>",
      "</div>"
    ].join("")
    var result = newsArticleView.render();
    tea.check(expected === result)
  })
})
