(function(exports) {
  function HeadlineList() {
    this.headlineListArray = [];
  }

  HeadlineList.prototype.getHeadlineListArray = function() {
    return this.headlineListArray;
  }

  HeadlineList.prototype.addHeadlines = function(headlineObject) {
    // Will need to add a loop here for working through api list
    var id = this.headlineListArray.length;
    var headline = new Headline(headlineObject, id)
    this.headlineListArray.push(headline)
  };

  exports.HeadlineList = HeadlineList;
})(this);