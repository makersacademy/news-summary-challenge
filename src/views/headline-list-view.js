(function(exports) {
  function HeadlineListView(headlineList, optionalHeadlineView) {
    this.headlineList = headlineList
    this.HeadlineView = optionalHeadlineView || HeadlineView
  }

  HeadlineListView.prototype = {
    getHTML: function () {
      var that = this
      var headlineViews = []
      this.headlineList.all().forEach(function(headline) {
        var view = new that.HeadlineView(headline)
        headlineViews.push(view.getHTML())
      })
      return wrapHTML({
        content: headlineViews.join(''),
        element: "div",
        id: "headline-list"
      })
    }
  }

  exports.HeadlineListView = HeadlineListView

})(this)
