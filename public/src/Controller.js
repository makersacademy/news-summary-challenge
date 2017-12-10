"use strict";

(function(exports) {

  var request
  var data
  var self

  function Controller(content, headlineList) {
    this._content = content
    this._headlineList = headlineList
  }

  Controller.prototype.getContentDiv = function() {
    return this._content
  }

  Controller.prototype.getHeadlineList = function() {
    return this._headlineList
  }

  Controller.prototype.getHeadlines = function() {
    request = new XMLHttpRequest()
    self = this
    request.onreadystatechange = function() {
      if (request.readyState == 4 && request.status == 200) {
        data = JSON.parse(request.response).response.results
        data.forEach(function(data) {
          self.getHeadlineList().addHeadline(data.webTitle)
        })
      }
    }
    request.open("GET", "https://content.guardianapis.com/search?api-key=4ed7e67d-4463-43c6-99e1-fe2eee5abc4b", true)
    request.send(null);
  }

  exports.Controller = Controller

})(this)
