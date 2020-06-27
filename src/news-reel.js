(function (exports) {

  function NewsReel(apiResponse) {
    this._list = []
    this.allNews = apiResponse;
  };

  NewsReel.prototype.addNews = function (elements) {
    for(var i in elements) {
      this._list.push(elements[i]);
    }
  };

  exports.NewsReel = NewsReel;
})(this);