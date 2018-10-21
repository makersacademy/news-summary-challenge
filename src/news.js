(function(exports) {
  var GetNewsFunc, renderFunc, GetSummaryFunc;

  function News(GetNewsFunc = GetNews, renderFunc = render, GetSummaryFunc = GetSummary) {
    this.GetSummary = GetSummaryFunc
    const that = this;
    GetNewsFunc(function(error,result){
      if (error === null) {
        console.log(JSON.parse(result).response.results)
        that.articles = JSON.parse(result).response.results
        that.formattedArticles = that.formatArticles(that.articles)
        renderFunc(that.formattedArticles)
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
      that.GetSummary(article.webUrl,function(error,result){
        if (error === null) {
          formattedArticle.summary = result;
        } else {
          formattedArticle.summary = undefined;
        }
        formattedArticles.push(formattedArticle);
      })
    })
    return formattedArticles
  }

  exports.News = News
})(this)
