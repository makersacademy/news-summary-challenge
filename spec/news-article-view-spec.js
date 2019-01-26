'use strict';

var newsArticleModel = {
  headline: function() {
    return 'news headline'
  },

  summary: function() {
    return 'news summary'
  },

  thumbnail: function() {
    return 'image'
  }
}

var newsArticleView = new NewsArticleView(newsArticleModel)

tea.describe('news article view', function() {
  tea.it('renders a news article', function() {
    var expected = [
      "<div class='container'>",
        "<a class='btn btn-primary mb-2 mt-2 float-right' href='#home'>",
        "Back To NewsFeed",
        "</a>",
        "<img class='card-img-top' src=image>",
        "<h1>news headline</h1>",
        "<p>news summary</p>",
      "</div>"
    ].join("")
    var result = newsArticleView.render();
    tea.check(expected === result)
  })
})
