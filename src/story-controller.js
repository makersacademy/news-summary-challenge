'use strict';

(function(exports) {
  function Controller() {
    this.story = new Story()
    this.view = new View(this.story)
  }

  Controller.prototype.addTitle = function(text) {
    return (this.story.addTitle(text))
  }

  Controller.prototype.createString = function() {
    return (this.view.createString())
  }

  Controller.prototype.printDiv = function(divId = 'app') {
    var string = this.createString()
    document.getElementById(divId).innerHTML = string
  }

  exports.Controller = Controller
})(this);
