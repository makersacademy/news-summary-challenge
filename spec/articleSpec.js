'use strict';

aWholeNewWorld('Article', function () {

  headline = 'Headline'
  summary = 'Summary'
  url = 'Url'
  image = 'Image'

  article = new Article(headline, url, image, summary)

  it('is created with a headline', function () {
    wish(article.showHeadline()).toEqual('Headline')
  })

  it('can return a summary of the full story', function () {
    wish(article.showSummary()).toEqual('Summary')
  })

  it('has a link to the full story', function () {
    wish(article.showUrlToFullStory()).toEqual('Url')
  })

  it('has a picture attached to the story', function () {
    wish(article.featureImage()).toEqual('Image')
  })

  var headline, summary, url, image, article
})