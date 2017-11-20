"use strict";

(function(exports){
  exports.ArticleListView = function(articleList){
    var _articleList = articleList;
    var _numberOfArticles = _articleList.getNumberOfArticles();
    console.log("number of articles",_numberOfArticles);
    var _articleView;

    
    var _allArticlesHTML = function(){
      var allArticlesHtml = ""
      for (var i = 0; i<_numberOfArticles; i++){
        _articleView = new ArticleView(_articleList.getArticleByIndex(i), i);
        allArticlesHtml += _articleView.renderArticle();
      }
      return allArticlesHtml;
    }

    var renderPage = function(){
      document.getElementById("titles").innerHTML = _allArticlesHTML();
    }
    
    return {renderPage:renderPage}
  }

})(this);
