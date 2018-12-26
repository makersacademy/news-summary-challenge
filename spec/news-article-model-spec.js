'use strict';

var apiResponse = {
  webTitle: 'news headline',
  fields: {
    body: 'news summary',
    thumbnail: 'photo'
  }
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

  tea.it('returns the thumbnail', function() {
    var expected = 'photo'
    var result = newsArticleModel.thumbnail();
    tea.check(expected === result)
  })

  tea.it('returns the id', function() {
    var expected = 1
    var result = newsArticleModel.articleId;
    tea.check(expected === result)
  })

})
