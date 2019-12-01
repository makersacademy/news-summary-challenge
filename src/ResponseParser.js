const ResponseParser = function(result, api) {
  this.result = result
  this.api = api
}

ResponseParser.prototype.getApiUrl = function() {
  return this.result.apiUrl
}

ResponseParser.prototype.getWebUrl = function() {
  return this.result.webUrl
}

ResponseParser.prototype.getThumbnailUrl = function () {
  return this.result.fields.thumbnail
}

ResponseParser.prototype.getTitle = function () {
  return this.result.webTitle
}

ResponseParser.prototype.getBody = function () {
  return this.result.fields.body
}

ResponseParser.prototype.parseGuardianResponse = function() {
  return {
    body: this.getBody(),
    title: this.getTitle(),
    webUrl: this.getWebUrl(),
    apiUrl: this.getApiUrl(),
    thumbnailUrl: this.getThumbnailUrl(),
  }
}

exports.ResponseParser = ResponseParser