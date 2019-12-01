const Fetcher = function() {
  this.baseUrl = `http://news-summary-api.herokuapp.com`
  this.headlinesUrl = "http://content.guardianapis.com/search?"
}

Fetcher.prototype.concatUrl = function(api, url) {
  return `${this.baseUrl}/${api}?apiRequestUrl=${url}`
}

Fetcher.prototype.getAylienUrl = function(url) {
  return `https://api.aylien.com/api/v1/summarize?url=/${url}`
}

Fetcher.prototype.getHeadlineApiUrl = function(result) {
  return result.apiUrl
}

Fetcher.prototype.getHeadlineWebUrl = function(result) {
  return result.webUrl
}
exports.Fetcher = Fetcher