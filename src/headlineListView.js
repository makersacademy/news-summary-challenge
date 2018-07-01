"use strict";

(function (exports) {

  function HeadlineListView(headlineList) {
    this.headlineList = headlineList;
    this.html = "<ul>";
  };

  HeadlineListView.prototype.returnHeadlineHTML = function() {
    for (var i = 0; i < this.headlineList.headlineListArray.length; i++) {
      var headline = this.headlineList.headlineListArray[i].headline.webTitle;
      var storyLink = this.headlineList.headlineListArray[i].headline.webUrl;
      var image = this.headlineList.headlineListArray[i].headline.fields.thumbnail;
      this.html = this.html + `<li><div><a href='#${storyLink}'>${headline}<div><img src='${image}'></div></a></div></li><br>`;
    }
    this.html = this.html + "</ul>";
    return this.html;
  };

  exports.HeadlineListView = HeadlineListView;

})(this);
