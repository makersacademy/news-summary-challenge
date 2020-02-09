'use strict';

(function(exports) {
  function Controller(doc = document) {
    this.list = new List()
    this.view = new View(this.list)
    this.document = doc
  }

  Controller.prototype.addStory = function(text) {
    return (this.list.newStory(text))
  }

  Controller.prototype.createString = function() {
    return (this.view.createString())
  }

    Controller.prototype.printDiv = function(divId = 'app') {
    var string = this.createString()
    this.document.getElementById(divId).innerHTML = string
  }

  Controller.prototype.getArticle = function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search', true);
    request.onload = function() {
        if (request.status === 200) {
          var data = JSON.parse(request.response)
          console.log(data.response.results[0].webTitle)
          // data.results.results.forEach(function(result) {
          //   console.log(result.webTitle)
          //   // self.addStory(result.webTitle);
          // });
        }
        else {
          console.log('Request failed. Returned status:' + request.status);
        }
    };
    request.send();
  }

  exports.Controller = Controller
})(this);

