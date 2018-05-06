(function(exports){

  function News(id, headline, img){
    this._id = id;
    this._headline = headline;
    this._img = img;
  }

  News.prototype.get = function () {
    return {
    id: this._id,
    headline: this._headline,
    image: this._img
    }
  };


  exports.News = News;

})(this)
