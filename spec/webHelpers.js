(function(exports) {
  function quickDisplay() {
    var newsList = new NewsList();
    newsList.addToList("headline", "date", "url", "content")
  }
  exports.quickDisplay = quickDisplay;
})(this)
