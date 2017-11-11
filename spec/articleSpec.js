'use strict';

aWholeNewWorld('Article', function () {
  var article = new Article
  it('is created with a headline', function (){
    wish(article.showHeadline()).toEqual('10 Ways To Have A Healthier Christmas!')
  })

  it('can return a summary of the full story', function () {
    wish(article.showSummary()).toEqual('Christmas is notoriously a time to indulge, but don’t let this be the green light to overindulge! You can still enjoy all the festivities of the season and get through the Christmas period without too much impact on your health and waistline. Try our top 10 tips for a healthier Christmas.')
  })

  it('has a link to the full story', function () {
    wish(article.showUrlToFullStory()).toEqual('https://www.realbuzz.com/activities-interests/topics/festive-health-fitness/article/10-ways-to-a-healthier-christmas/')
  })
})