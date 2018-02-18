(function (exports) {
  function Summaries(headlines) {
    this.summaries = headlines;
  };

  Summaries.prototype.makeHtmlList = function(){
    list = "<ul>"
    this.summaries.forEach(function(headline) {
      list += `<li>${headline.webUrl} <a href=${article.webUrl}>read more...</a></li>`
    });
    list +="</ul>"
    return list;
  };

  exports.Summaries = Summaries;
})(this);
