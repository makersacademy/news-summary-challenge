(function(exports){

  function News(id, headline, img, summary, bodytext){
    this._id = id;
    this._headline = headline;
    this._img = img;
    this._summary = summary;
    this._text = bodytext;
  }

  News.prototype.get = function () {
    return {
    id: this._id,
    headline: this._headline,
    image: this._img,
    summary: this._summary,
    body: this._text
    }
  };

  exports.News = News;

})(this)
