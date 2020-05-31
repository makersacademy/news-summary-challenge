(function (exports) {
  function HeadlineView(headline) {
    this.headline = headline;
  }

  HeadlineView.prototype.addHTMLTags = function () {
    let string = '<div><h1>' + this.headline.title + `</h1><p>Follow this <a href="${this.headline.url}">link</a></p></div>`;

    return string;
  }

  exports.HeadlineView = HeadlineView;
})(this);
