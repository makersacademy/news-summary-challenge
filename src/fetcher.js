const Fetcher = function(api, url) {
  this.baseUrl = `http://news-summary-api.herokuapp.com/${api}?apiRequestUrl=`
  this.url = url
  this.api = api
}

Fetcher.prototype.concatUrl = function() {
  return `http://news-summary-api.herokuapp.com/${this.api}?apiRequestUrl=${this.url}`
}

exports.Fetcher = Fetcher