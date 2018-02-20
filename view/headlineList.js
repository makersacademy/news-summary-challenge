(function (exports) {
  function HeadlineList(articles) {
    this.articles = articles;
  };

  HeadlineList.prototype.makeHtmlList = function(){
    list = "<ul>"
    this.articles.forEach(function(article) {
      list += `<li>${article.webTitle}<br></li></p>`
    });
    list +="</ul>"
    return list;
  };

  exports.HeadlineList = HeadlineList;
})(this);
