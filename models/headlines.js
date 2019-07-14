(function(exports) {
  function Headlines (callReturn, headline = Headline) {
    var headline = headline
    var callReturn = callReturn
    var headlines = []

    function getHeadLines() {
      return headlines
    }

    (function _storeHeadlines() {
      callReturn.forEach(function(entry) {
        _addHeadline(entry)
      })
    })()

    function _addHeadline(entry) {
      var newHeadline = new Headline(entry.headline, entry.shortUrl, entry.thumbnail)
      headlines.push(newHeadline)
    }

    return {
      getHeadlines: getHeadLines
    }
  }

  exports.Headlines = Headlines
})(this)
