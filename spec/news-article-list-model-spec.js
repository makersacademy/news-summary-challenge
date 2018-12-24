'use strict';

function newsArticleListModel() {}

var newsArticleListModel = new NewsArticleListModel(newsArticleListModel);

tea.describe('news article list model', function() {
  tea.it('adds articles to its list array', function() {
    var expected = ["news article 1"]
    newsArticleListModel.addArticle('news article 1')
    tea.check(newsArticleListModel.viewList().length === 1)
  })

})
