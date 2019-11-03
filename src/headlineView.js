(function(exports) {

  function HeadlineView(headline) {
    this.headline = headline
  }

  HeadlineView.prototype.returnSummary = function() {
    if (this.headline.thumbnail === undefined) {
      this.headline.thumbnail = "/images/thumbnail.jpeg"
    }
    return '<div class="single-new"><h2>' + this.headline.title + "</h2>" + '<img src="' +
            this.headline.thumbnail + '"><p>' +
            this.headline.summary + '</p><a class="link" target="_blank" href="' +
            this.headline.url + '">Read more...</a><p><a class="link" href="#">Home Page</a></p></div>'
  }

  exports.HeadlineView = HeadlineView
})(this)
