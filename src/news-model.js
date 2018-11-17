(function(exports) {
  function News(text) {
    this._text = text;
  }

  News.prototype.displayText = function () {
    return this._text
  }

  exports.News = News
})(this);
