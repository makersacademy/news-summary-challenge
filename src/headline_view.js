(function (exports) {
  function HeadlineView(headline) {
    this.headline = headline;
  }

  HeadlineView.prototype.addHTMLTags = function () {
    let string = '<div><h1>' + this.headline.title + `</h1><p>Follow this <a href="${this.headline.webUrl}">link</a></p></div>`;
    console.log('View: ' + this.headline.title);
    console.log('View: ' + string);
    
    return string;
  }

  exports.HeadlineView = HeadlineView;
})(this);
