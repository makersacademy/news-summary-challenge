(function(exports) {
  function Articles() {
  this.store = []
}

Articles.prototype = {

  getArticles: function() {
    return this.store
  },

  addArticle: function(article) {
    this.store.push(article)
  },
}

  exports.Articles = Articles
})(this);
