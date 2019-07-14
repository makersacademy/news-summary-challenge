(function(exports) {
  function Headlines (headline = Headline, callReturn) {
    var headline = headline
    var callReturn = callReturn
    var headlines = []

    function getHeadLines() {
      return headlines
    }

    function storeHeadlines() {
      callReturn.forEach(function(entry) {
        _addHeadline(entry)
      })
    }

    function _addHeadline(entry) {
      var newHeadline = new Headline(entry.headline, entry.shortUrl, entry.thumbnail)
      headlines.push(newHeadline)
    }

    return {
      getHeadlines: getHeadLines,
      storeHeadlines: storeHeadlines
    }
  }

  exports.Headlines = Headlines
})(this)
