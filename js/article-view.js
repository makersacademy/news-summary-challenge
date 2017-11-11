"use strict";

(function(exports){
  exports.ArticleView = function(article, index){
    var _article = article;
    var _index = index;
   
    var _createHTMLforThumbnail =  function(){
      return "<img class='thumb' src='" + _article.getThumbnail() +"'>";
    }

    var _createHTMLforTitle = function(){
      return "<h3><a href='#"+_index+"'>"+_article.getTitle()+"</a></h3>";
    }

    var _createHTMLforDescription = function(){
      return _article.extractDescription() + "<a href='#"+_index+"'>read more</a>";
    }

    var renderArticle = function(){
      return "<div class='article'>"+_createHTMLforThumbnail() + _createHTMLforTitle() + _createHTMLforDescription() +"</div>";
    }
    // console.log(renderArticle());
    return {renderArticle:renderArticle}
  }

})(this);