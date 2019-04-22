(function(exports){

  function SummaryView (summary) {
    this.summary = summary
  }

  SummaryView.prototype = {
    getHTML: function () {
      var headline, image, summary

      headline = wrapHTML({
        content: this.summary.getHeadline(),
        element: 'h2'
      })

      image = `<img src="${this.summary.getThumbnail()}">`

      summary = wrapHTML({
        content: this.summary.getSummary(),
        element: 'div'
      })


      return wrapHTML({
        content: image + headline + summary,
        element: 'article',
        id: 'summary'
      })
    }
  }

  exports.SummaryView = SummaryView

})(this)
