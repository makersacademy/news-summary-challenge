(function(exports) {
    function ArticleListView(ArticleList){
      this.articleList = ArticleList;
    }
    
    ArticleListView.prototype.outputHtmlString = function(){
      var output = '';
      for(var i = 0; i< this.articleList.getList().length; i++){
        var headline = this.articleList.getList()[i].getHeadline();
        output += ("<li>" + headline + "</li>");
      }
      output = ("<ul>" + output + "</ul>");
      return output;
    };
  
    exports.ArticleListView = ArticleListView;
  })(this);