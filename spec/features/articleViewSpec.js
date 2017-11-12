'use strict';

aWholeNewWorld('ArticleView', function () {

  articleView = new ArticleView

  headline = 'Headline';
  summary = 'I\'m the first paragraph';
  url = 'Url';
  image = 'Image';

  article = new Article(headline, url, image, summary)

  it('can return a string of html to display an article', function () {
    wish(articleView.articleHTML(article)).toEqual('<div><p id="headlines">Headline</p><img src="Image"><br><p id="summary"> I\'m the first paragraph</p><br><p><a href="Url">Click To Read Full Story</a></p></div>');
  });

  

  var article, headline, summary, url, image, articleView;
});