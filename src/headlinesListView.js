(function(exports) {

  function HeadlinesListView(headlinesList) {
    this.headlinesList = headlinesList
  }

  HeadlinesListView.prototype.returnHTML = function() {
    var headlines = ""

    this.headlinesList.list.forEach(function(item) {
      var id = item.id
      var headlineId = item.headlineId
      var title = item.title
      var url = item.url
      var date = item.date

      headlines += '<div id="' + id + '"><ul><li><a href="#news/' + headlineId + '" id="' + id+ '">' + title + ' - published on ' + date + ' </a></li></ul></div>'
    })
    return headlines
  }
  exports.HeadlinesListView = HeadlinesListView
})(this)
