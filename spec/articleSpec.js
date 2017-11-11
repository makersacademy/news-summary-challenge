'use strict';

aWholeNewWorld('Article', function () {
  var article = new Article
  it('is created with a headline', function (){
    wish(article.showHeadline()).toEqual('How to be healthy this Christmas!')
  })

  it('can return a summary of the full story', function () {
    wish(article.showSummary()).toEqual('Christmas is notoriously a time to indulge, but don’t let this be the green light to overindulge! You can still enjoy all the festivities of the season and get through the Christmas period without too much impact on your health and waistline. Try our top 10 tips for a healthier Christmas.')
  })
})