"use strict";

(function(exports){
  exports.Article = function(text){
    var _text = text;

    showArticle = function(text){
      return _text;
    };
    return { showArticle: showArticle };


  };
  exports.Article = Article;
})(this);
