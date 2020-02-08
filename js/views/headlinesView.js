(function(exports) {
  function HeadlinesView(newsList) {
    this.newsList = newsList
  }

  HeadlinesView.prototype = {
    displayHeadlines: function() {
      let output = []
      let listLength = this.newsList.list.length
      if (listLength > 0) {
        for (let i = 0; i < listLength; i++) {
          var headline = this.newsList.list[i].headline
          var id = this.newsList.viewAll()[i].id
          output.push(`<li><div><a href="#articles/${id}">${headline}</a></div></li>`)
          }
          return `<ul>${output.join("")}</ul>`
      } else {
        return 'Nothing to see here...'
      }
    }
  }

  exports.HeadlinesView = HeadlinesView
})(this)