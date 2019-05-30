(function(exports) {
  function HeadlinesController(optionalHeadlineListView, optionalAPIInterface) {
    this.HeadlineListView = optionalHeadlineListView || HeadlineListView
    var APIInterfaceConstructor = optionalAPIInterface || APIInterface
    this.apiInterface = new APIInterfaceConstructor()
  }

  HeadlinesController.prototype = {
    display: function (optionalTarget) {
      var target = optionalTarget || document.getElementById('app')
      var that = this

      this.apiInterface.getHeadlines(function(headlineList) {
        var headlineListView = new that.HeadlineListView(headlineList)
        that.HeadlineList = headlineList
        target.innerHTML = headlineListView.getHTML()
      })

    },

    displaySummary: function (headline) {
      var request, response

      request = new XMLHttpRequest()
      request.open('GET', `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${headline.getURL()}`)

      request.onload = function () {
        var summary = new Summary({
          thumbnail: headline.getThumbnail(),
          headline: headline.getHeadline(),
          summary: JSON.parse(this.response).sentences.join(' ')
        })
        var view = new SummaryView(summary)
        var target = document.getElementById('app')
        target.innerHTML = view.getHTML()

        console.log(summary)
      }

      request.send()
    }
  }


  // this part not tested!

  exports.HeadlinesController = HeadlinesController

})(this)
