(function(exports) {

  function Article(url, headline, body, thumbnail) {
    this.id = ArticleIndex.
    this.url = url;
    this.headline = headline;
    this.body = body;
    this.thumbnail = thumbnail;
  }

  Article.prototype = {

  getUrl: function() {
    return this.url
  },

  getHeadline: function() {
    return this.headline
  },

  getBody: function() {
    return this.body
  },

  getThumbnail: function() {
    return this.thumbnail
  },
}

  exports.Article = Article
})(this);
