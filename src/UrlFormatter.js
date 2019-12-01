const fs = require("fs")

const UrlFormatter = function() {
  this.baseUrl = `http://news-summary-api.herokuapp.com`
  this.headlinesUrl = "http://content.guardianapis.com/search?"
  this.gkey = "113271b1-2b3a-4cf3-8de8-5312329f29c5"
}

UrlFormatter.prototype.concatUrl = function(api, url) {
  return `${this.baseUrl}/${api}?apiRequestUrl=${url}`
}

UrlFormatter.prototype.getAylienUrl = function(url) {
  return `https://api.aylien.com/api/v1/summarize?url=${url}`
}

UrlFormatter.prototype.formatGuardianBaseUrl = function(key){
  apiKey = key || this.gkey
  return `${this.headlinesUrl}api-key=${apiKey}&show-fields=thumbnail`
}

UrlFormatter.prototype.getHeadlineApiUrl = function(result) {
  return result.apiUrl
}

UrlFormatter.prototype.getHeadlineWebUrl = function(result) {
  return result.webUrl
}

UrlFormatter.prototype.getThumbnailUrl = function (result) {
  return result.fields.thumbnail
}

UrlFormatter.prototype.getTitle = function (result) {
  return result.webTitle
}

exports.UrlFormatter = UrlFormatter