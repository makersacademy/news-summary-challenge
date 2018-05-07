(function(exports){

  function NewsView(news){
    this._news = news;
  };

  NewsView.prototype.html = function () {
    var news = this._news.get().headline
    var image = this._news.get().image
    return `<div><img src='${image}'></img><div>${news}</div>`
  };

  exports.NewsView = NewsView;

})(this)
