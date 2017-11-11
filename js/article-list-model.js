"use strict";

(function(exports){
  exports.ArticleList = function(){
    var _articleList = [];

    var addArticle = function(article){
      _articleList.push(article);
    }

    var getArticleByIndex = function(index){
      return _articleList[index];
    }

    var getNumberOfArticles = function(){
      return _articleList.length;
    }

    return { addArticle:addArticle, 
            getArticleByIndex:getArticleByIndex,
            getNumberOfArticles:getNumberOfArticles};
  }

})(this);