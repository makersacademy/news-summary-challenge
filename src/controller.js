(function(exports) {

  function Controller(newsArticleListModel, newsArticleListView) {
    this.newsArticleListModel = newsArticleListModel;
    this.newsArticleListView = newsArticleListView;
    this._getArticles();
  }

  Controller.prototype = {
    _updateDOM: function(html) {
      document.getElementById('app').innerHTML += html;
    },

    _getArticles: function() {
      articles = this.newsArticleListModel.viewList();
      html = this.newsArticleListView.render(articles)
      this._updateDOM(html)
    }
  }

  exports.Controller = Controller;
})(this);
