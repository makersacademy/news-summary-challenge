'use strict';

(function (exports) {
  function Controller(headlineview) {
    this.headlineview = headlineview
  }

  Controller.prototype.renderHeadlines = function () {
    document.getElementById("headlines").innerHTML = this.headlineview.headlineHtml();
  }

  exports.Controller = Controller
})(this);
