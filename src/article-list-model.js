(function(exports){

  function ArticleList(article = Article){
    this._article = article;
    this._list = [];
  }

  ArticleList.prototype = {
    list: function(){return this._list;},
    add: function(data, body){this._list.push(new this._article(data,body))}
  }

  exports.ArticleList = ArticleList;
})(this)
