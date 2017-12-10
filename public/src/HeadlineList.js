"use strict";

(function(exports) {

  function HeadlineList() {
    this._list = []
  }

  HeadlineList.prototype.getList = function() {
    return this._list
  }

  HeadlineList.prototype.addHeadline = function(headline) {
    this.getList().push(headline)
  }

  exports.HeadlineList = HeadlineList

})(this)
