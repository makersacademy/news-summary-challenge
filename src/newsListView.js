(function (exports) {
  function NewsListView(newsList) {
    this.newsList = newsList
    this.view = '<ul>'
  }

  NewsListView.prototype.render = function(headlineList) {
      console.log(headlineList)
      var view = '<ul>'
      for (let i = 0; i < headlineList.length; i++) {
      console.log(headlineList[i])
      view += 'li' + headlineList[i].getHeadline() + '</li>'
    }
      view += '</ul>'
      return view
  }

  exports.NewsListView = NewsListView
})(this)
