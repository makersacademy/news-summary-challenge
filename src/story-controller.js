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

  // // Url Change
  
  // Controller.prototype.makeUrlChangeShowStoryOnCurrentPage = function() {
  //   window.addEventListener("hashchange", this.showStoryOnCurrentPage());
  // }

  // Controller.prototype.showStoryOnCurrentPage = function() {
  //   this.showStory(this.getIDFromUrl(window.location));
  // }

  // Controller.prototype.getIDFromUrl = function(location) {
  //   return location.hash.split("#")[1];
  // }

  // Controller.prototype.showStory = function(storyId) {
  //   console.log(this.list.array[storyId])
  //   // var string = this.list.array[storyId].text
  //   // this.document.getElementById('story').innerHTML = string
  // }

  exports.Controller = Controller
})(this);
