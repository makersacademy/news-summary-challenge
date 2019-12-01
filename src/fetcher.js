const Fetcher = function() {
  this.baseUrl = `http://news-summary-api.herokuapp.com`
}

Fetcher.prototype.concatUrl = function(api, url) {
  return `${this.baseUrl}/${api}?apiRequestUrl=${url}`
}

exports.Fetcher = Fetcher