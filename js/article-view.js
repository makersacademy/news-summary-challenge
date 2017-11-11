"use strict";

(function (exports) {
  exports.ArticleView = function (article, index) {
    var _article = article;
    var _index = index;

    var _createHTMLforThumbnail = function () {
      return "<img class='thumb' src='" + _article.getThumbnail() + "'>";
    }

    var _createHTMLforTitle = function () {
      return "<h3><a href='#" + _index + "' id='title" + _index + "'>" + _article.getTitle() + "</a></h3>";
    }

    var _createHTMLforBody = function () {
      return "<div class='article-body'>" + _article.getBody() + "</div>";
    }

    var _createHTMLforDescription = function () {
      return _article.extractDescription() + "<a href='#" + _index + "'>read more</a>";
    }

    var renderArticle = function () {
      return "<div class='article'>" + _createHTMLforThumbnail() + _createHTMLforTitle() + _createHTMLforDescription() + "</div>";
    }

    var renderWholeArticle = function () {
      return "<div id='" + _index + "'><h2>" + _createHTMLforTitle() + "</h2>" + _createHTMLforBody() + "</div><a href='#titles'>Back to Top</a>";
    }
    // console.log(renderArticle());
    return {
      renderArticle: renderArticle,
      renderWholeArticle: renderWholeArticle
    }
  }

})(this);