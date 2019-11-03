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
      var thumbnail = item.thumbnail

      headlines += '<div id="' + id + '"><ul><li><h2><a href="#news/' +
      headlineId + '" id="' + id+ '">' +
      title + '</h2><img class="thumbnail" src="' +
      thumbnail + '"></a><br> Published on ' + date + '</li></ul></div>'
    })
    return headlines
  }
  exports.HeadlinesListView = HeadlinesListView
})(this)
