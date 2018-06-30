"use strict";

(function (exports) {

  function HeadlineListView(headlineList) {
    this.headlineList = headlineList;
    this.html = "<ul>";
  };

  HeadlineListView.prototype.returnHeadlineHTML = function() {
    for (var i = 0; i < this.headlineList.headlineListArray.length; i++) {
      var headline = this.headlineList.headlineListArray[i]['headline']['webTitle'];
      this.html = this.html + `<li><div><a href="#${i}">${headline}</a></div></li>`;
    }
    this.html = this.html + "</ul>";
    return this.html;
  };

  exports.HeadlineListView = HeadlineListView;

})(this);
