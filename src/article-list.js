(function(exports) {

  function ArticleList() {
    this.list = [];
  };

  ArticleList.prototype.add = function(title, url) {
    this.list.push(new Article({title: title, url: url}));
  };

  exports.ArticleList = ArticleList;
})(this);
