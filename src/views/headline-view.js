(function(exports){
  function HeadlineView(headline) {
    this.headline = headline
  }

  HeadlineView.prototype = {
    getHTML: function () {
      console.log(this.headline)
      return `<div class="headline">${this.headline.getHeadline()}</div>`
    }
  }
  
  exports.HeadlineView = HeadlineView
})(this)
