(function(exports) {
  function ArticleModel(articleJSON, id = null) {
    this.articleJSON = articleJSON;
    this.id = id;
  }

  ArticleModel.prototype.title = function() {
    return this.articleJSON.webTitle
  }

  ArticleModel.prototype.section = function() {
    return this.articleJSON.sectionName
  }

  ArticleModel.prototype.thumbnail = function() {
    return this.articleJSON.fields.thumbnail
  }

  ArticleModel.prototype.apiUrl = function() {
    return this.articleJSON.apiUrl
  }

  ArticleModel.prototype.getId = function() {
    return this.id
  }

  exports.ArticleModel = ArticleModel;
})(this);