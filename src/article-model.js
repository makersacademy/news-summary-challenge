(function(exports) {
  
  function Article({title, url, thumbnail}) {
    this.title = title;
    this.url = url;
    this.thumbnail = thumbnail;
  }

  Article.prototype = {
    getTitle: function() {
      return this.title;
    },

    getURL: function() {
      return this.url;
    },

    getThumbnail: function() {
      return this.thumbnail;
    }
  }

  exports.Article = Article
})(this);
