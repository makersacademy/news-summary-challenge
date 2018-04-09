(function(exports) {
  function News() {
    this._stories = [];
  }

  News.prototype.add = function(article) {
    this._stories.push(article);
  }

  News.prototype.all = function() {
    return this._stories;
  }

  exports.News = News;
})(this);
