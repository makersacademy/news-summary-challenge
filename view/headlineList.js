(function (exports) {
  function HeadlineList(articles) {
    this.articles = articles;
  };

  HeadlineList.prototype.makeHtmlList = function(){
    i = 0
    list = "<ul>"
    summaryMaker = new SummaryMaker();
    this.articles.forEach(function(article) {
      summaryMaker.getSummary(article.webUrl)
      summaryMaker.createSummary()
      list += `<img src=${article.fields.thumbnail}>
      <li>${article.webTitle}<br>
      ${summaryMaker.summary}
      <a href=${article.webUrl}>read more...</a></li>`
      i++
    });
    list +="</ul>"
    return list;
  };

  exports.HeadlineList = HeadlineList;
})(this);


// var summary = summaryMaker.getSummary(article.webUrl)
// ${summary.createSummary}
