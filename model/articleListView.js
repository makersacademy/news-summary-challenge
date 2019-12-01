(function(exports) {
    function ArticleListView(ArticleList){
      this.articleList = ArticleList;
    }
    
    ArticleListView.prototype.outputHtmlString = function(){
      var output = '';
      for (var i = 0; i< this.articleList.getList().length; i++){
        var headline = this.articleList.getList()[i].getHeadline();
        var id = this.articleList.getList()[i].getId();
        output += ("<li><a href=#notes/" + id + ">" + headline + "</a></li>");
      }
      output = ("<ul>" + output + "</ul>");
      return output;
    };
  
    exports.ArticleListView = ArticleListView;
})(this);