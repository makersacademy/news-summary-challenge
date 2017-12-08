(function() {
  'use strict';

  var articleList = new ArticleList(Article);
  articleList.add('headline', 'image', 'summary', 'articleURL');
  articleList.add('headline2', 'image2', 'summary2', 'articleURL2');
  articleList.add('headline3', 'image3', 'summary3', 'articleURL3');
  var articleListView = new ArticleListView(articleList);

  describe('Article list view converts article to html', function() {
    var HTMLString = `<div><div><img src="image"><a href="#articles/1"><h3>headline</h3></a></div><div><img src="image2"><a href="#articles/2"><h3>headline2</h3></a></div><div><img src="image3"><a href="#articles/3"><h3>headline3</h3></a></div></div>`
    console.log('expectation', HTMLString);
    console.log('result', articleListView.render());
    return assert.isTrue(articleListView.render() === HTMLString);
  })


}());
