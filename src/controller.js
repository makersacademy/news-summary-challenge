(function(exports) {

  function Controller(newsArticleListModel, newsArticleListView) {
    this.newsArticleListModel = newsArticleListModel;
    this.newsArticleListView = newsArticleListView;
    this._getArticles();
  }

  Controller.prototype = {
    _updateDOM: function(html) {
      document.getElementById('app').innerHTML = html;
    },

    _getArticles: function() {
      articleList = this.newsArticleListModel.viewList();
      html = this.newsArticleListView.render(articleList)
      this._updateDOM(html)
    }

    // liust for hash change
    // on hash change render single article view (summary)
  }

  exports.Controller = Controller;
})(this);
