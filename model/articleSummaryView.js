(function(exports) {
  function ArticleSummaryView(article){
    this.article = article;
  }
  
  ArticleSummaryView.prototype.outputHtmlString = function(){
    var hl = this.article.getHeadline();
    var s = this.article.getSummary();
    var url = this.article.getUrl();
    var output = ("<div><h1>" + this.article.getHeadline() + "</h1><p>" + this.article.getSummary() + "</p><form><input type=\"button\" onclick=\"href=" + "\"http://www.guardian.co.uk\" value =\"View original article\"><form</div>");
    // var output = "<div><h1>" + hl + "</h1><p>" + s + "</p><form><input type='button' onclick='window.location.href='" + url + "'" + "value ='View original article'><form</div>";
    console.log(output);
    
    return output;
  };
  
  exports.ArticleSummaryView = ArticleSummaryView;
})(this);