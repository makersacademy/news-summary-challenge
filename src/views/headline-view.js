(function(exports){
  function HeadlineView(headline) {
    this.headline = headline
  }

  HeadlineView.prototype = {
    getHTML: function () {
      var link

      link = wrapHTML({
        content: this.headline.getHeadline(),
        element: "a",
        href: this.headline.getURL()
      })

      return wrapHTML({
        content: link,
        element: "div",
        classes: ["headline"]
      })
    }
  }
  
  exports.HeadlineView = HeadlineView
})(this)
