(function(exports) {
  function NewsController(newsArticleList) {
    this.list = newsArticleList;
    const that = this;

    this.renderHeadlines = function(app = document.getElementById('app')) {
      const target = app;
      this._getHeadlines();
      setTimeout(function() {
        const headlines = that._list().convertToHTML();
        target.innerHTML = headlines;
      }, 1000);
    };

    // private
    this._list = function() {
      return this.list;
    };

    this._getHeadlines = function() {
      this._list().fetchHeadlines();
    };
  }

  exports.NewsController = NewsController;
})(this);
