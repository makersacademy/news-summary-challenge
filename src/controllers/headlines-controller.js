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
        target.innerHTML = headlineListView.getHTML()
      })

    }
  }

  exports.HeadlinesController = HeadlinesController

})(this)
