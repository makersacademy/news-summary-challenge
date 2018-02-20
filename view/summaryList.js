(function (exports) {
  function SummaryList(articles) {
    this.articles = articles;
  };

  SummaryList.prototype.makeHtmlList = function(){
    list = "<ul>"
    summaryMaker = new SummaryMaker();
    this.articles.forEach(function(article) {
      summaryMaker.getSummary(article.webUrl)
      summaryMaker.createSummary()
      list += `<img src=${article.fields.thumbnail}>
      <li>${summaryMaker.summary}
      <a href=${article.webUrl}>read more...</a></li></p>`
    });
    list +="</ul>"
    return list;
  };

  exports.SummaryList = SummaryList;
})(this);
