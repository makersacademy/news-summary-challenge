(function(exports) {
  function HeadlineList() {
    this.headlineListArray = [];
  }

  HeadlineList.prototype.getHeadlineListArray = function() {
    return this.headlineListArray;
  }

  HeadlineList.prototype.addHeadlines = function(api) {
    
    for(var i = 0; i < api.response.results.length; i++) {
      var id = this.headlineListArray.length;
      var headline = new Headline(api.response.results[i], id)
      this.headlineListArray.push(headline)
    }
  };

  exports.HeadlineList = HeadlineList;
})(this);