(function(exports) {
  'use strict';

  var mainDiv = document.getElementById('app');

  function ArticleController(articleListView, articleList) {
    this._articleList = articleList;
    this._articleList.add('headline', 'image', 'summary', 'articleURL');
    this._articleList.add('headline2', 'image2', 'summary2', 'articleURL2');
    this._articleList.add('headline3', 'image3', 'summary3', 'articleURL3');
    this._articleListView = new articleListView(this._articleList);
  }

  ArticleController.prototype.insertHTML = function () {
    mainDiv.innerHTML = this._articleListView.render();
  };

  exports.ArticleController = ArticleController;

}(this));
