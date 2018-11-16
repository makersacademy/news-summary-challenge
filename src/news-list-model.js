(function(exports) {
  function NewsList() {
    this.newsItems = []
  };

  NewsList.prototype.getNewsItems = function () {
    return this.newsItems
  }

  exports.NewsList = NewsList
})(this)
