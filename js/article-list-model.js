"use strict";

(function(exports){
  exports.ArticleList = function(){
    var _articleList = [];

    var addArticle = function(article){
      _articleList.push(article);
    }

    var returnArticleByIndex = function(index){
      return _articleList[index];
    }


    return { addArticle:addArticle, 
            returnArticleByIndex:returnArticleByIndex};
  }

})(this);