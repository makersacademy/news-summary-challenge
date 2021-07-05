'use strict';

(function() {
  var headline = 'I am a headline';
  var article = new NewsArticle(headline);

  function testNewArticleHeadline() {
    console.log('testNewArticleHeadline');
    expect(article.headline).toEqual(headline);
  }

  testNewArticleHeadline();
})(this)
