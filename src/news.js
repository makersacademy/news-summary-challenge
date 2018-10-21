(function(exports) {
  var GetNewsFunc, renderLinkedHeadlinesFunc;

  function News(GetNewsFunc = GetNews, renderLinkedHeadlinesFunc = renderLinkedHeadlines) {
    const that = this;
    GetNewsFunc(function(error,result){
      if (error === null) {
        console.log(JSON.parse(result).response.results)
        that.articles = JSON.parse(result).response.results
        that.linkedHeadlines = that.getLinkedHeadlines(that.articles)
        renderLinkedHeadlinesFunc(that.linkedHeadlines)
      }
    });
  }

  News.prototype.getLinkedHeadlines = function(articles) {
    var linkedHeadlines = []
    articles.forEach(function(item) {
      linkedHeadlines.push({
        headline: item.webTitle,
        link: item.webUrl
      })
    })
    return linkedHeadlines
  }

  exports.News = News
})(this)
