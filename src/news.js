(function(exports) {
  function News(text) {
    this.text = text
  };

  News.prototype.show = function() {
    return this.text
  };

  exports.News = News
})(this);
