'use strict';

function newsArticleModel() {}

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

})
