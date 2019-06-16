(function(exports) {

  function ArticleList() {
    this.list = [];
  };

  ArticleList.prototype.add = function(title, url, thumbnail) {
    this.list.push(new Article({title: title, url: url, thumbnail: thumbnail}));
  };

  ArticleList.prototype.getText = function() {
    return this.list;
  }

  exports.ArticleList = ArticleList;
})(this);
