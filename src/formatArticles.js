(function(exports){
  function formatArticles(articles) {
    var formattedArticles = []
    articles.forEach(function(article){
      var formattedArticle = {
        headline: article.webTitle,
        link: article.webUrl,
      }
      GetSummary(article.webUrl,function(error,result){
        if (error === null) {
          formattedArticle.summary = result;
          formattedArticles.push(formattedArticle);
        } else {
          formattedArticle.summary = undefined;
          formattedArticles.push(formattedArticle);
        }
      })
    })
    console.log(formattedArticles)
    return formattedArticles
  }

  exports.formatArticles = formatArticles

})(this)
