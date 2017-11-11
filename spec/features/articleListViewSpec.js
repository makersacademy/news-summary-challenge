'use strict';

aWholeNewWorld('ArticleListView', function () {

  headline = 'Headline';
  summary = 'Summary';
  url = 'url';
  image = 'image';

  articleList = new ArticleList;
  articleList.addArticle(headline, summary, url, image);
  articleListView = new ArticleListView(articleList);

  it('can return a string of html to display all articles with links to the full story', function () {
    wish(articleListView.allHeadlinesHTML()).toEqual('<div><ul><li><div><p id="headlines">Headline</p><p><a href="Summary">Click To Read</a></p></div></li></ul></div>');
  });

  var headline, summary, url, image, articleList, articleListView;
});