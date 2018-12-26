(function(exports) {

  function Controller(newsArticleListModel, newsArticleListView, NewsArticleView) {
    this.newsArticleListModel = newsArticleListModel;
    this.newsArticleListView = newsArticleListView;
    this.NewsArticleView = NewsArticleView;

    this._loadArticleListView();
    this._listenForHashChange();
  }

  Controller.prototype = {
    _updateDOM: function(html) {
      document.getElementById('app').innerHTML = html;
    },

    _loadArticleList: function() {
      articleList = this.newsArticleListModel.viewList();
      html = this.newsArticleListView.render(articleList)
      this._updateDOM(html)
    },

    _listenForHashChange: function() {
      var self = this;
      window.addEventListener('hashchange', function(event) {
        event.preventDefault();
        if (window.location.href.includes('#home')) {
          self._loadArticleListView();
        } else {
          var articleId = window.location.hash.split("article/")[1];
          var article = self.newsArticleListModel.findByArticleId(articleId);
          var html = new self.NewsArticleView(article).render();
          self._updateDOM(html);
        }
      })
    }
  }

  exports.Controller = Controller;
})(this);
