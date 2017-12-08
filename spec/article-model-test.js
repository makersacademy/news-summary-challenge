(function() {
  var article = new Article('Headline', 'ImageURL', 'Summary', 'ArticleURL');

  describe('A new article has an id of zero', function() {
    return assert.isEqual(article.id(), 0);
  })

  describe('A new article has a headline', function() {
    return assert.isEqual(article.headline(), 'Headline');
  })

  describe('A new article has an image url', function() {
    return assert.isEqual(article.image(), 'ImageURL');
  })

  describe('A new article has a summary', function() {
    return assert.isEqual(article.summary(), 'Summary');
  })

  describe('A new article has an article url', function() {
    return assert.isEqual(article.articleURL(), 'ArticleURL');
  })

})();
