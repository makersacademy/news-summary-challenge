(function(exports) {
  function NewsList() {
    this.list = []
  }

  NewsList.prototype = {
    addArticle: function(article) {
      this.list.push(new NewsArticle(article, this.list.length))
    },
    viewAll: function() {
      return this.list
    }

  }

  exports.NewsList = NewsList
})(this)