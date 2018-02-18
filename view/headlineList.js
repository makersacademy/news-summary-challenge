(function (exports) {
  function HeadlineList(articles) {
    this.articles = articles;
  };

  HeadlineList.prototype.makeHtmlList = function(){
    list = "<ul>"
    this.articles.forEach(function(article) {
      list += `<img src=${article.fields.thumbnail}>
      <li>${article.webTitle}
      <a href=${article.webUrl}>read more...</a></li>`
    });
    list +="</ul>"
    return list;
  };

  exports.HeadlineList = HeadlineList;
})(this);
