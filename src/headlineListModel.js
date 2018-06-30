"use strict";

(function(exports) {

  function HeadlineList() {
    this.headlineListArray = [];
  };

  HeadlineList.prototype.addHeadlines = function(APIcall) {
    for(var i = 0; i < APIcall.results.length; i++) {
      var id = this.headlineListArray.length;
      var headline = new Headline(APIcall.results[i], id)
      this.headlineListArray.push(APIcall.results[i])
    };
  };

  exports.HeadlineList = HeadlineList;

})(this);
