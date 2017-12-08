(function(exports) {
  'use strict';

  var mainDiv = document.getElementById('app');

  function ArticleController(articleListView) {
    this._articleListView = articleListView;
  }

  ArticleController.prototype.insertHTML = function () {
    mainDiv.innerHTML = this._articleListView.render();
  };

  exports.ArticleController = ArticleController;

}(this));
