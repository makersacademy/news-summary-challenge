'use strict';

(function (exports) {
  function Controller(headlineview) {
    this.headlineview = headlineview
  }

  Controller.prototype.renderHeadlines = function () {
    document.getElementById("headlines").innerHTML = this.headlineview.headlineHtml();
  }

  Controller.prototype.getHeadlineId = function () {
    return window.location.hash.split("#")[1];
  }

  Controller.prototype.retrieveHeadlineById = function (id) {
    return this.headlineview.headlinerequester.findHeadlineById(id)
  };

  Controller.prototype.renderSpecificHeadline = function () {
    var story = new SingleLinkView(this.retrieveHeadlineById(this.getHeadlineId()));
    document.getElementById("story").innerHTML = story.singleLinkHtml();
  }

  Controller.prototype.hashChangeListener = function () {
    window.addEventListener("hashchange", function () {this.renderSpecificHeadline()}.bind(this));
  }

  exports.Controller = Controller
})(this);
