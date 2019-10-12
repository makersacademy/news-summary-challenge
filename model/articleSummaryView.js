(function(exports) {
  function ArticleSummaryView(article){
    this.article = article;
  }
  
  ArticleSummaryView.prototype.outputHtmlString = function(){
    var output = "<div>" + this._note.text()+ "</div>";
    return output;
  };
  
  exports.ArticleSummaryView = ArticleSummaryView;
})(this);