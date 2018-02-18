'use strict';

(function (exports) {
  function Controller(headlineview, summaryrequester) {
    this.headlineview = headlineview
    this.summaryrequester = summaryrequester
  }

  Controller.prototype.renderHeadlines = function () {
    document.getElementById("headlines").innerHTML = this.headlineview.headlineHtml();
  }

  Controller.prototype.hashChangeListener = function () {
    window.addEventListener("hashchange", function () {this._renderSpecificHeadline()}.bind(this));
  }

  // private methods

  Controller.prototype._getHeadlineId = function () {
    return window.location.hash.split("#")[1];
  }

  Controller.prototype._retrieveHeadlineById = function (id) {
    return this.headlineview.headlinerequester.findHeadlineById(id)
  };

  Controller.prototype._renderSpecificHeadline = function () {
    var singlelink = new SingleLinkView(this._retrieveHeadlineById(this._getHeadlineId()));
    this._makeSummaryRequest(singlelink.story.webUrl)
    document.getElementById("linktostory").innerHTML = singlelink.singleLinkHtml();
  }

  Controller.prototype._makeSummaryRequest = function (url) {
    this.summaryrequester.makeRequest(url)
    this._renderSummary();
  }

  Controller.prototype._renderSummary = function () {
    var summaryview = new SummaryView(this.summaryrequester)
    document.getElementById("summary").innerHTML = summaryview.parse();
  }

  exports.Controller = Controller
})(this);
