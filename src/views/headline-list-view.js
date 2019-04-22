(function(exports) {
  function HeadlineListView(headlineList, optionalHeadlineView) {
    this.headlineList = headlineList
    this.HeadlineView = optionalHeadlineView || HeadlineView
  }

  HeadlineListView.prototype = {
    getHTML: function () {
      var headlineViews = []
      this.headlineList.all().forEach(function(headline) {
        var view = new this.HeadlineView(headline)
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
