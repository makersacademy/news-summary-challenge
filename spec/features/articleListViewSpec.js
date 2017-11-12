'use strict';

aWholeNewWorld('ArticleListView', function () {

  headline = 'Headline';
  body = '<div><p>I\'m the first paragraph</p> <p>I\'m the second paragraph</p></div>';
  url = 'Url';
  image = 'Image';

  articleList = new ArticleList;
  articleList.addArticle(headline, url, image, body);
  articleListView = new ArticleListView(articleList);

  it('can return a string of html to display all articles with links to the full story', function () {
    wish(articleListView.allArticlesHTML()).toEqual('<div><ul><li><div><p id="headlines">Headline</p><img src="Image"><br><p><a href="Url">Click To Read</a></p></div></li></ul></div>');
  });

  var headline, body, url, image, articleList, articleListView;
});