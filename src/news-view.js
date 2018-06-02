(function(exports){

  function NewsView(headline, img, bodytext){
    this._headline = headline;
    this._img = img;
    this._bodytext = bodytext;
  };

  NewsView.prototype.html = function () {
    return `<div><img src='${this._img}'></img><div>${this._headline}</div><div>${this._bodytext}</div>`
  };

  exports.NewsView = NewsView;

})(this)
