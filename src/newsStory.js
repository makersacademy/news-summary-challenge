(function(exports) {

  function NewsStory(headline, originURL, id) {
    this.headline = headline;
    this.originURL = originURL;
    this.id = id;
  };

  exports.NewsStory = NewsStory;
})(this);
