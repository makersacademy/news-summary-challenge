(function(exports) {
  var GetNewsFunc;

  function getHeadlines(articles) {
    var headlines = []
    articles.forEach(function(item) {
      headlines.push(item.webTitle)
    })
    return headlines
  }

  function News(GetNewsFunc = GetNews) {
    const that = this;
    GetNewsFunc(function(error,result){
      if (error === null) {
        that.articles = JSON.parse(result).response.results
        that.headlines = getHeadlines(that.articles)
        renderHeadlines(that.headlines)
      }
    });
  }

  exports.News = News
})(this)
