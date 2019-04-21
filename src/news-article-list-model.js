function NewsArticleList(){
  this._list = [];
};

NewsArticleList.prototype = {
  store: function(article){
    this._list.push(article);
  },
  show: function(){
    return this._list;
  }
};
