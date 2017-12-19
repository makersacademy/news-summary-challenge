(function() {
  'use strict';

  function ArticleDouble(headline, imageURL, summary, articleURL) {};

  var articleList = new ArticleList(ArticleDouble);

  describe('A new article list has a an empty array of articles', function() {
    return assert.isTrue(articleList.articles().length === 0);
  })

  describe('An article list can create add new articles', function() {
    articleList.add('Headline', 'ImageURL', 'Summary', 'ArticleURL');
    return assert.isTrue(articleList.articles().length === 1);
  })

}());
