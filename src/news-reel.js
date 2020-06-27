(function (exports) {

  function NewsReel(apiResponse) {
    this.defaultMaxElements = 10
    this._list = []
    this.allNews = apiResponse;
  };

  NewsReel.prototype.addNews = function (elements) {
    if(elements.length > this.defaultMaxElements) {
      elements = elements.slice(0, 10);
    };
    for(var i in elements) {
      this._list.push(elements[i]);
    }
  };

  exports.NewsReel = NewsReel;
})(this);