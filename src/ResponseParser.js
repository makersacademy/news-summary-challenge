const ResponseParser = function(result, api) {
  this.guardianResult = result
  this.api = api
}

ResponseParser.prototype.getApiUrl = function() {
  return this.guardianResult.apiUrl
}

ResponseParser.prototype.getWebUrl = function() {
  return this.guardianResult.webUrl
}

ResponseParser.prototype.getThumbnailUrl = function () {
  return this.guardianResult.fields.thumbnail
}

ResponseParser.prototype.getTitle = function () {
  return this.guardianResult.webTitle
}

ResponseParser.prototype.getBody = function () {
  return this.guardianResult.fields.body
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

ResponseParser.prototype.getAylienSentences = function(result) {
  return result.sentences
}

ResponseParser.prototype.returnHtmlStringFromSentences = function(sentences) {
  htmlString = ""
  sentences.forEach(function(sent) {
    htmlString += `${sent}`
  })
  return htmlString
}