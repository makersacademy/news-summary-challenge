(function(exports) {
  function ArticleList() {
    this._articles = [];
  }

  ArticleList.prototype = {
    save: function(headline, content, url, date, thumbnail, image) {
    var article = new Article(headline, content, url, date, thumbnail, image);
    var articleId = this._articles.length + 1;
    article._id = articleId;
    this._articles.push(article);
    },

    articles: function() {
      return this._articles;
    },

  };

  exports.ArticleList = ArticleList;
})(this);
