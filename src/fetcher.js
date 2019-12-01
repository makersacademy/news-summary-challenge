const fs = require("fs")

const Fetcher = function() {
  this.baseUrl = `http://news-summary-api.herokuapp.com`
  this.headlinesUrl = "http://content.guardianapis.com/search?"
  this.gkey = "113271b1-2b3a-4cf3-8de8-5312329f29c5"
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

Fetcher.prototype.getThumbnailUrl = function (result) {
  return result.fields.thumbnail
}

exports.Fetcher = Fetcher