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
    request.open('GET', 'myservice/username?id=some-unique-id');
    request.onload = function() {
        if (request.status === 200) {
            console.log(request.response.results);
        }
        else {
            console.log('Request failed. Returned status:' + request.status);
        }
    };
    request.send();
  }


  exports.Controller = Controller
})(this);

