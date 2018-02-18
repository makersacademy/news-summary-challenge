(function (exports) {
  function Headlines(articles) {
    this.listOfNewsStories = articles;
  };

  Headlines.prototype.makeList = function(){
    list = "<ul>"
    this.listOfNewsStories.forEach(function(article) {
      list += `<li>${article.webTitle}<a href=${article.webUrl}> read more...</a></li>`
    });
    list +="</ul>"
    return list;
  };

  exports.Headlines = Headlines;
})(this);
