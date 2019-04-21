(function(exports){
  function HeadlineView(headline) {
    this.headline = headline
  }

  HeadlineView.prototype = {
    getHTML: function () {
      return wrapHTML({
        content: this.headline.getHeadline(),
        element: "div",
        classes: ["headline"]
      })
    }
  }
  
  exports.HeadlineView = HeadlineView
})(this)
