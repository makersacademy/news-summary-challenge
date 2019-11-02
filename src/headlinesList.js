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

  HeadlinesList.prototype.getHeadlineByUrl = function(url) {
    for(var i = 0; i < this.list.length; i++) {
      if (this.list[i].headlineId === url) {
        return this.list[i]
      }
    }
  }
  exports.HeadlinesList = HeadlinesList
})(this)
