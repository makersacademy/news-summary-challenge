(function(exports){

  function NewsView(news, img){
    this._news = news;
    this._img = img;
  };

  NewsView.prototype.html = function () {
    return `<div><img src='${this._img}'></img><div>${this._news}</div>`
  };

  exports.NewsView = NewsView;

})(this)
