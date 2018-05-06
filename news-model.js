(function(exports) {
  function News(text){
    this.text = text;
  };
  News.prototype.display = function() {
    return this.text;
  }
  exports.News = News

})(this);
