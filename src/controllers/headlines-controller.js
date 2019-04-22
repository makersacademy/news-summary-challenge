(function(exports) {
  function HeadlinesController(optionalHeadlineListView, optionalAPIInterface) {
    this.HeadlineListView = optionalHeadlineListView || HeadlineListView
    var APIInterface = optionalAPIInterface || APIInterface
    this.apiInterface = new APIInterface()
  }

  HeadlinesController.prototype = {
    display: function (optionalTarget) {
      var target = optionalTarget || document.getElementById('app')
      var headlineList = this.apiInterface.getHeadlines()
      var headlineListView = new this.HeadlineListView(headlineList)
      target.innerHTML = headlineListView.getHTML()
    }
  }

  exports.HeadlinesController = HeadlinesController

})(this)
