"use strict";

(function(exports) {

  function HeadlineListView(headlineList) {
    this._headlineList = headlineList
  }

  HeadlineListView.prototype.getHeadlineList = function() {
    return this._headlineList
  }

  exports.HeadlineListView = HeadlineListView

})(this)
