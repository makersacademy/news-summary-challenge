(function(exports) {
  function SingleNewsView(news) {
    this.news = news
  }

  SingleNewsView.prototype.DisplaySingleNewsHeader = function() {
    var title = this.news.title
    var image = this.news.image
    var id = this.news.id
    var html = `<p><a href='${id}'>${title}</a></p><img src=${image}>`
    return html
  }

  SingleNewsView.prototype.DisplaySingleNewsSummary = function() {
    var url = this.news.url
    var summary = this.news.summary
    var html = `<p>${summary}</p><p><a href='${url}'>${url}</a></p>'`
    return html
  }
  exports.SingleNewsView = SingleNewsView
})(this);
