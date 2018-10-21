(function(exports) {
  var GetNewsFunc, renderHeadlinesFunc, GetSummaryFunc;

  function News(GetNewsFunc = GetNews, renderHeadlinesFunc = renderHeadlines) {
    const that = this;
    GetNewsFunc(function(error,result){
      if (error === null) {
        console.log(JSON.parse(result).response.results)
        that.articles = JSON.parse(result).response.results
        that.formattedArticles = that.formatArticles(that.articles)
        renderHeadlinesFunc(that.formattedArticles)
      }
    });
  }

  News.prototype.formatArticles = function (articles) {
    var formattedArticles = []
    const that = this
    articles.forEach(function(article){
      var formattedArticle = {
        headline: article.webTitle,
        link: article.webUrl,
        thumbnail: article.fields.thumbnail
      }
      formattedArticles.push(formattedArticle);
    })
    return formattedArticles
  }

  exports.News = News
})(this)
