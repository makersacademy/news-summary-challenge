'use strict';

aWholeNewWorld('Article', function () {
  var article = new Article
  it('is created with a headline', function (){
    wish(article.showHeadline()).toEqual('Where have all the bees gone?')
  })
})