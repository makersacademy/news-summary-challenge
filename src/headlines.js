(function(exports) {
  function Headlines(request) {
    this.request = request;
  }

  Headlines.prototype.individualHeadlines = function() {
    var webUrls = this.request.response.results.map(headline => headline.webUrl)
    splitUrls = webUrls.map(url => url.split('').slice(27).join(''))
    return splitUrls
  }

  exports.Headlines = Headlines;
})(this);
