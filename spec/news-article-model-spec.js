'use strict';

var apiResponse = {
  headline: 'news headline',
  summary: 'news summary'
}

var newsArticleModel = new NewsArticleModel(apiResponse)

tea.describe('news article model', function() {
  tea.it('returns the headline', function() {
    var expected = 'news headline'
    var result = newsArticleModel.headline();
    tea.check(expected === result)
  })

  tea.it('returns the summary', function() {
    var expected = 'news summary'
    var result = newsArticleModel.summary();
    tea.check(expected === result)
  })

})
