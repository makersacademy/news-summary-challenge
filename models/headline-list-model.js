(function(exports) {
  function HeadlineList() {
    this.headlines = [];
  };

  HeadlineList.prototype.getHeadlines = function() {
    return this.headlines;
  };

  HeadlineList.prototype.addHeadline = function(headline) {
    this.headlines.push(headline);
  };

  HeadlineList.prototype.createHeadline = function(webTitle, webUrl, thumbnail) {
    headline = new Headline(webTitle, webUrl, thumbnail);
    this.addHeadline(headline);
  };

  HeadlineList.prototype.getHeadlineById = function(id) {
    return this.headlines.find(function(headline) {
      return headline.id === id
    });
  };

  exports.HeadlineList = HeadlineList;
})(this);
