'use strict';

aWholeNewWorld('ArticleList', function () {

  headline = 'Headline';
  summary = 'Summary';
  url = 'url';
  image = 'image';

  articleList = new ArticleList;
  articleList.addArticle(headline, summary, url, image);
  articleListView = new ArticleListView(articleList);

  it('is created with an empty array', function () {
    wish(articleListView.allHeadlinesHTML()).toEqual('<div id="headlines"><ul><li id="0">Headline</li></ul></div>');
  });

  var headline, summary, url, image, articleList, articleListView;
});