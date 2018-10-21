(function(exports) {
  var GetNewsFunc, renderFunc;

  function News(GetNewsFunc = GetNews, renderFunc = render) {
    const that = this;
    GetNewsFunc(function(error,result){
      if (error === null) {
        console.log(JSON.parse(result).response.results)
        that.articles = JSON.parse(result).response.results
        that.formattedArticles = formatArticles(that.articles)
        render(that.formattedArticles)
      }
    });
  }

  exports.News = News
})(this)
