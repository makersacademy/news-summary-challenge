(function(exports) {
  function NewsList() {
    this.allHeadlines = []
  }

  NewsList.prototype.newHeadline = function(string) {
    var headline = new Headline(string);
    this.allHeadlines.push(headline);
  }

  exports.NewsList = NewsList;
})(this);