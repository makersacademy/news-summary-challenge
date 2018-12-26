'use strict';

function newsArticleModel() {
  this.articleId = 1;
}

var apiConnector = {
  getData: function() {
    return ["article"]
  }
}

var newsArticleListModel = new NewsArticleListModel(newsArticleModel, apiConnector);

tea.describe('news article list model', function() {
  tea.it('returns array of articles', function() {
    newsArticleListModel._addArticles()
    tea.check(newsArticleListModel.viewList(), ["article"])
  })

  tea.it('returns an individual article form the array of articles', function() {
    newsArticleListModel._addArticles()
    var expected = ["article"];
    var result = newsArticleListModel.findByArticleId(1)
    tea.check(expected, result)
  })


})
