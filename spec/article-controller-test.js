(function() {
  'use strict';

  var mainDiv = document.getElementById('app');

  function ArticleListDouble() {};
  ArticleListDouble.prototype.add = function () {};

  function ArticleListViewDouble() {}
  ArticleListViewDouble.prototype.render = function () {
    return `<div><div><img src="image"><a href="#articles/1"><h3>headline</h3></a></div><div><img src="image2"><a href="#articles/2"><h3>headline2</h3></a></div><div><img src="image3"><a href="#articles/3"><h3>headline3</h3></a></div></div>`;
  };

  function SingleArticleViewDouble() {}
  SingleArticleViewDouble.prototype.render = function () {
    return '<div><div><img src="image"><a href="#articles/1"><h3>headline</h3></a></div></div>';
  };

  function XMLHttpRequestDouble() {}

  var articleController = new ArticleController(ArticleListViewDouble, new ArticleListDouble(), SingleArticleViewDouble, XMLHttpRequestDouble);

  describe('Controller inserts html for single article into page', function() {
    articleController.singleArticleInsertHTML('dummy article');
    var HTMLString = '<div><div><img src="image"><a href="#articles/1"><h3>headline</h3></a></div></div>';
    return assert.isTrue(mainDiv.innerHTML === HTMLString);
  })

}());
