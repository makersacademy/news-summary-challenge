(function (exports) {
  function Article (id, headline, url, thumbnailUrl, api) {
    this.id = id
    this.headline = headline
    this.url = url
    this.thumbnailUrl = thumbnailUrl
    this.api = api
  }

  Article.prototype.getId = function () {
    return this.id;
  };

  Article.prototype.getHeadline = function () {
    return this.headline;
  };

  Article.prototype.getUrl = function () {
    return this.url;
  };

  Article.prototype.getThumbnailUrl = function () {
    return this.thumbnailUrl;
  };

  Article.prototype.getApi = function () {
    return this.api;
  };

  exports.Article = Article

})(this)
