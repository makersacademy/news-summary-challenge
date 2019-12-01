const ResultParser = function(result) {
  this.result = result
}

ResultParser.prototype.getHeadlineApiUrl = function() {
  return this.result.apiUrl
}

ResultParser.prototype.getHeadlineWebUrl = function() {
  return this.result.webUrl
}

ResultParser.prototype.getThumbnailUrl = function () {
  return this.result.fields.thumbnail
}

ResultParser.prototype.getTitle = function () {
  return this.result.webTitle
}

exports.ResultParser = ResultParser