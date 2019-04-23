(function(exports){

  function SummaryView (summary) {
    this.summary = summary
  }

  SummaryView.prototype = {
    getHTML: function () {
      var backLink, headline, image, summary

      headline = wrapHTML({
        content: this.summary.getHeadline(),
        element: 'h2'
      })

      image = `<img src="${this.summary.getThumbnail()}">`

      summary = wrapHTML({
        content: this.summary.getSummary(),
        element: 'div'
      })

      backLink = wrapHTML({
        content: "Back to the headlines",
        element: 'a',
        href: '#headlines',
      })


      return wrapHTML({
        content: image + headline + summary + backLink,
        element: 'article',
        id: 'summary'
      })
    }
  }

  exports.SummaryView = SummaryView

})(this)
