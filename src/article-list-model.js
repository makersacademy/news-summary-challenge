(function(exports){

  function ArticleList(article){
    this._article = article;
    this._list = [];
  }

  ArticleList.prototype = {
    list: function(){return this._list;},
    add: function(data){this._list.push(new this._article(data))}
  }

  exports.ArticleList = ArticleList;
})(this)
