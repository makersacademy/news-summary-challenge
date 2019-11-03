(function(exports) {

  function HeadlinesListView(headlinesList) {
    this.headlinesList = headlinesList
  }

  HeadlinesListView.prototype.returnHTML = function() {
    var headlines = ""
    var string = ""

    this.headlinesList.list.forEach(function(item) {
      // var id = item.id
      var headlineId = item.headlineId
      var title = item.title
      var url = item.url
      var date = item.date
      var thumbnail = item.thumbnail

      headlines += '<li><a href="#news/' +
      headlineId + '"><h2>' +
      title + '</h2><img class="thumbnail" src="' +
      thumbnail + '"></a><br> Published on ' +
      date + '</li>'

    })
    string = '<div class="news-list"><ul>' + headlines + '</div></ul>'

    return string
  }
  exports.HeadlinesListView = HeadlinesListView
})(this)
