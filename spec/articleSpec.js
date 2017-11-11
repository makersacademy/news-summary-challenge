'use strict';

aWholeNewWorld('Article', function () {

  headline = '10 Ways To Have A Healthier Christmas!'
  summary = 'Christmas is notoriously a time to indulge, but don’t let this be the green light to overindulge! You can still enjoy all the festivities of the season and get through the Christmas period without too much impact on your health and waistline. Try our top 10 tips for a healthier Christmas.'
  url = 'https://www.realbuzz.com/activities-interests/topics/festive-health-fitness/article/10-ways-to-a-healthier-christmas/'
  image = 'https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/30d7070bbc7a7a40e0aaa7f2a275c599139a/i1080x475.jpg'

  article = new Article(headline, summary, url, image)

  it('is created with a headline', function () {
    wish(article.showHeadline()).toEqual('10 Ways To Have A Healthier Christmas!')
  })

  it('can return a summary of the full story', function () {
    wish(article.showSummary()).toEqual('Christmas is notoriously a time to indulge, but don’t let this be the green light to overindulge! You can still enjoy all the festivities of the season and get through the Christmas period without too much impact on your health and waistline. Try our top 10 tips for a healthier Christmas.')
  })

  it('has a link to the full story', function () {
    wish(article.showUrlToFullStory()).toEqual('https://www.realbuzz.com/activities-interests/topics/festive-health-fitness/article/10-ways-to-a-healthier-christmas/')
  })

  it('has a picture attached to the story', function () {
    wish(article.featureImage()).toEqual('https://s3-eu-west-1.amazonaws.com/rb-cms/rbv5/production/uploads/cover_images/30d7070bbc7a7a40e0aaa7f2a275c599139a/i1080x475.jpg')
  })

  var headline, summary, url, image, article
})