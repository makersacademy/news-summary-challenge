(function(exports){
  function HeadlineView(headline) {
    this.headline = headline
  }

  HeadlineView.prototype = {
    getHTML: function () {
      var headline, image, summaryLink

      headline = wrapHTML({
        content: this.headline.getHeadline(),
        element: "a",
        targetBlank: true,
        href: this.headline.getURL()
      })

      image = `<img src="${this.headline.getThumbnail()}">`

      summaryLink = wrapHTML({
        content: "View summary",
        element: "a",
        href: `#${this.headline.getID()}`,
        classes: ['summary']
      })

      return wrapHTML({
        content: headline + image + summaryLink,
        element: "div",
        classes: ["headline"]
      })
    }
  }
  
  exports.HeadlineView = HeadlineView
})(this)
