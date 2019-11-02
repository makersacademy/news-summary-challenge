(function(exports) {
  function HeadlinesList(headlines) {
    this.headlines = headlines
    this.list = []
  }

  HeadlinesList.prototype.addHeadlines = function() {
    var list = this.list
    this.headlines.forEach(function(item, index){
      list.push(new Headline(item, index))
    })
  }
  exports.HeadlinesList = HeadlinesList
})(this)
