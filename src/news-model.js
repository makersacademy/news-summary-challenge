(function(exports) {
  function News(text, id) {
    this.id = id
    this.text = text;
  }

  News.prototype.getId = function () {
    return this.id
  }

  News.prototype.displayText = function () {
    return this.text
  }

  exports.News = News
})(this);
