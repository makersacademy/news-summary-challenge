(function(exports) {
  function ArticleSummaryView(article){
    this.article = article;
  }
  
  ArticleSummaryView.prototype.outputHtmlString = function(){
    var output = "<div>" + this.article.text()+ "</div>";
    return output;
  };
  
  exports.ArticleSummaryView = ArticleSummaryView;
})(this);