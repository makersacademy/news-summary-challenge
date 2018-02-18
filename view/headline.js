(function (exports) {

  var id = 0

  function Headline() {
    this.title = article.webTitle
    this.webUrl = article.webUrl
    // this.id = id++

  Headline.prototype.getTitle = function() {
      return this.title;
    };

    Headline.prototype.getURL = function() {
      return this.url;
    };

    exports.Headline = Headline;
  })(this);
