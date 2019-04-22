(function(exports){
  function HeadlineView(headline) {
    this.headline = headline
  }

  HeadlineView.prototype = {
    getHTML: function () {
      var headline, image

      headline = wrapHTML({
        content: this.headline.getHeadline(),
        element: "a",
        targetBlank: true,
        href: this.headline.getURL()
      })

      image = `<img src="${this.headline.getThumbnail()}">`

      return wrapHTML({
        content: image + headline,
        element: "div",
        classes: ["headline"]
      })
    }
  }
  
  exports.HeadlineView = HeadlineView
})(this)
