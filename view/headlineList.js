(function (exports) {
  function HeadlineList(articles) {
    this.articles = articles;
  };

  HeadlineList.prototype.makeHtmlHeadlines = function(){
    list = "<ul>"
    this.articles.forEach(function(article) {
      list += `<li>
      <a href="#${article.id}">
      ${article.webTitle}<br></li></p>`
    });
    list +="</ul>"
    return list;
  };

  exports.HeadlineList = HeadlineList;
})(this);
