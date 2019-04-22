(function(exports) {
  function HeadlinesController(headlineList, optionalHeadlineListView) {
    this.headlineList = headlineList
    this.HeadlineListView = optionalHeadlineListView || HeadlineListView
    this.headlineListView = new this.HeadlineListView(this.headlineList)
  }

  HeadlinesController.prototype = {
    display: function (optionalTarget) {
      var target = optionalTarget || document.getElementById('app')
      target.innerHTML = this.headlineListView.getHTML()
    }
  }

  exports.HeadlinesController = HeadlinesController

})(this)
