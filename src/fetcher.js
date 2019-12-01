const Fetcher = function(api, url) {
  this.baseUrl = `http://news-summary-api.herokuapp.com/${api}?apiRequestUrl=`
  this.url = url
}

Fetcher.prototype.getApiUrl = function() {
  return "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=sample_url"
}

exports.Fetcher = Fetcher